import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { GameOverComponent } from '../game-over/game-over.component';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [CommonModule,GameOverComponent],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss',
})
export class PlayComponent {
  constructor(public gameService: GameService) {}

  gameBoard = this.gameService.getGame();

  played(x: number, y: number) {
    this.gameService.updateBoard(x, y);
  }
}
