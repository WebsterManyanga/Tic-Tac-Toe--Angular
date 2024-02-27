import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-over',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.scss',
})
export class GameOverComponent {
  constructor(private gameService: GameService) {}

  winner = this.gameService.winner;

  resetGame() {
    this.gameService.gameover = false;
    this.gameService.resetBoard();
  }
}
