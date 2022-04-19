import { Injectable } from '@angular/core';

interface Player {
  name: string;
  order: number;
}


interface GameResult {
  start: string;
  end: string;
  winner: string;
  players: Player[];
}

const game1: GameResult = {
  start: "2022-02-14T15:14:30"
  , end: "2022-02-14T15:20:00"
  , winner: "Me"
  , players: [{ name: "Me", order: 1}, { name: "Taylor", order: 2}, {name: "Jack", order: 3}]
};


const game2: GameResult = {
  start: "2022-02-14T21:00:30"
  , end: "2022-02-14T21:30:30"
  , winner: "Stephanie"
  , players: [{ name: "Me", order: 1}, { name: "Stephanie", order: 2}, {name: "Jack", order: 3}]
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

  constructor() { }
}
