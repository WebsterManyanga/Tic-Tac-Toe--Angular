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

  setPlayer(player: 1 | -1) {
    this.currentPlayer = player;
  }

  getGame() {
    return this.gameBoard;
  }

  updateBoard(x: number, y: number) {
    if (this.gameBoard[x][y] !== 0) return;
    this.gameBoard[x][y] = this.currentPlayer;

    this.gameBoard.forEach((row) => {
      if (row[0] && row[0] === row[1] && row[1] === row[2]) {
        //win
        console.log('win1');
      }
    });

    for (let i = 0; i < 3; i++) {
      if (
        this.gameBoard[0][i] &&
        this.gameBoard[0][i] === this.gameBoard[1][i] &&
        this.gameBoard[1][i] === this.gameBoard[2][i]
      ) {
        //win
        console.log('win2');
      }
    }

    if (
      this.gameBoard[1][1] &&
      this.gameBoard[1][1] === this.gameBoard[0][0] &&
      this.gameBoard[1][1] === this.gameBoard[2][2]
    ) {
      //win
      console.log('win3');
    }

    if (
      this.gameBoard[1][1] && 
      this.gameBoard[1][1] === this.gameBoard[0][2] &&
      this.gameBoard[1][1] === this.gameBoard[2][0]
    ) {
      //win
      console.log('win4');
    }

    this.currentPlayer = this.currentPlayer * -1;
  }
}
