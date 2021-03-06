import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService, Player } from '../game.service';

interface AvailablePlayerChoice extends Player {
  checked: boolean;
}

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.page.html',
  styleUrls: ['./game-setup.page.scss'],
})
export class GameSetupPage implements OnInit {

  constructor(
    private gameSvc: GameService
    , private router: Router
  ) { }

  ngOnInit() {
    this.availablePlayers = this.gameSvc.getUniquePlayers().map(x => ({
      name: x
      , order: 0
      , checked: false
    }));
  }

  letsPlay = () => {
    const chosenPlayers = this.availablePlayers.filter(x => x.checked);

    if (chosenPlayers.length < 4 ) {
        alert("You must choose at least 4 players");
        return;
    }

    console.log(chosenPlayers.length); // work to validate number of players!!!
    
    // Setup the current game players and start timestamp:
    this.gameSvc.setCurrentGame({
      start: new Date().toISOString()
      , availablePlayers: chosenPlayers
    });
    // Navigate to the play screen:
    this.router.navigateByUrl("/play");
  };

  availablePlayers: AvailablePlayerChoice[] = [];

  newPlayerName = "";

  addNewPlayer = () => {

    // add a new player defaulted to checked:
    this.availablePlayers = [
      ...this.availablePlayers
      , {
        name: this.newPlayerName
        , checked: true
        , order: 0
      }
    ];
    // clear the new player name:
    this.newPlayerName = "";
  };
}
