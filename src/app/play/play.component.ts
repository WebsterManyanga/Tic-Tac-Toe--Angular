import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss',
})
export class PlayComponent {
  constructor(private gameService: GameService) {}

  gameBoard = this.gameService.getGame();

  played(x: number, y: number) {
    this.gameService.updateBoard(x, y);
  }
}
