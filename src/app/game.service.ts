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
  currentPlayer = 1;
  winner = 0;
  gameover = false;

  setPlayer(player: 1 | -1) {
    this.currentPlayer = player;
  }

  getGame() {
    return this.gameBoard;
  }

  resetBoard() {
    this.gameBoard = [...[
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]]
  }
 
  updateBoard(x: number, y: number) {
    if (this.gameBoard[x][y] !== 0) return;
    this.gameBoard[x][y] = this.currentPlayer;

    this.gameBoard.forEach((row) => {
      if (row[0] && row[0] === row[1] && row[1] === row[2]) {
        this.winner = this.currentPlayer;
        this.gameover = true;
      }
    });

    for (let i = 0; i < 3; i++) {
      if (
        this.gameBoard[0][i] &&
        this.gameBoard[0][i] === this.gameBoard[1][i] &&
        this.gameBoard[1][i] === this.gameBoard[2][i]
      ) {
        this.winner = this.currentPlayer;
        this.gameover = true;
      }
    }

    if (
      this.gameBoard[1][1] &&
      this.gameBoard[1][1] === this.gameBoard[0][0] &&
      this.gameBoard[1][1] === this.gameBoard[2][2]
    ) {
      this.winner = this.currentPlayer;
      this.gameover = true;
    }

    if (
      this.gameBoard[1][1] &&
      this.gameBoard[1][1] === this.gameBoard[0][2] &&
      this.gameBoard[1][1] === this.gameBoard[2][0]
    ) {
      this.winner = this.currentPlayer;
      this.gameover = true;
    }

    if (this.gameBoard.every((row) => row.every((col) => col !== 0))) {
      this.gameover = true;
    } 
    this.currentPlayer = this.currentPlayer * -1;
  }
}
