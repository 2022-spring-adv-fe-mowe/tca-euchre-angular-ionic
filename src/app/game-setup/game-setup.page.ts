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
    // Setup the current game players and start timestamp:
    this.gameSvc.setCurrentGame({
      start: new Date().toISOString()
      , availablePlayers: [
        {
          name: this.availablePlayers[0].name
          , order: 1
        }
        , {
          name: this.availablePlayers[1].name
          , order: 2
        }
        , {
          name: "Bradley"
          , order: 3
        }
      ]
    });
    // Navigate to the play screen:
    this.router.navigateByUrl("/play");
  };

  availablePlayers: AvailablePlayerChoice[] = [];

}
