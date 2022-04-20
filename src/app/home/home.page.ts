import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private gameSvc: GameService) {}

  shortestGame = 0;

  ngOnInit(): void {
  }

  ionViewDidEnter() {
    this.shortestGame = this.gameSvc.calculateShortestGame() / 1000 / 60;
  }

}
