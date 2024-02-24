import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]; //This is the board where 1 is 'x', -1 is 'o' and 0 means nothing has been entered
  currentPlayer = 0;

  setPlayer(player: 1 | -1) {
    this.currentPlayer = player;
  }

  updateBoard(x: number, y: number) {
    if (this.gameBoard[x][y] !== 0) return;
    this.gameBoard[x][y] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer * -1;
  }
}
