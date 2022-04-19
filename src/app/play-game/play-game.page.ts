import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.page.html',
  styleUrls: ['./play-game.page.scss'],
})
export class PlayGamePage implements OnInit {

  constructor(
    private gameSvc: GameService
    , private routerSvc: Router
    ) { }

  ngOnInit() {
  }

  endGame = () => {

    // Add a new game result:
    this.gameSvc.addGameResult(
      {
        start: ""
        , end: ""
        , winner: ""
        , players: []
      }
    );
  
    // Navigate to home page:
    this.routerSvc.navigateByUrl("/")
  
  };

}
