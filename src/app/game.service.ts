import { Injectable } from '@angular/core';

export interface Player {
  name: string;
  order: number;
}

interface GameResult {
  start: string;
  end: string;
  winner: string;
  players: Player[];
}

interface CurrentGame {
  start: string;
  availablePlayers: Player[];
};

const game1: GameResult = {
  start: "2022-02-14T15:14:30"
  , end: "2022-02-14T15:20:00"
  , winner: "Me"
  , players: [{ name: "Me", order: 1}, { name: "Gregory", order: 2}, {name: "Terry", order: 3}]
};


const game2: GameResult = {
  start: "2022-02-14T21:00:30"
  , end: "2022-02-14T21:30:30"
  , winner: "Laurie"
  , players: [{ name: "Me", order: 1}, { name: "Laurie", order: 2}, {name: "Terry", order: 3}]
};

@Injectable({
  providedIn: 'root'
})
export class GameService {


  gameResults = [
      game1
      , game2
  ];

  addGameResult = (r: GameResult) => {
    
    this.gameResults = [
      ...this.gameResults
      , r 
    ];
    
  };

  getUniquePlayers = () => (
    [... new Set(this.gameResults.flatMap(x => x.players.map(y => y.name)))]
  );

  currentGame: CurrentGame = {
    start: ""
    , availablePlayers: []
  };

  setCurrentGame = (g: CurrentGame) => {
    this.currentGame = g;
  };

  calculateShortestGame = () => (
    Math.min(
        ...this.gameResults.map(x => Date.parse(x.end) - Date.parse(x.start))
    )
  );


  constructor() { }
}
