import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss',
})
export class HomeScreenComponent {
  constructor(private gameService:GameService) {}

  selectPlayer(player: 1 | -1) {
    this.gameService.setPlayer(player);
  }
}
