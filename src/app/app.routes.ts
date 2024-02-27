import { Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PlayComponent } from './play/play.component';
import { GameOverComponent } from './game-over/game-over.component';

export const routes: Routes = [
  { component: HomeScreenComponent, path: 'f' },
  { component: PlayComponent, path: 'play' },
  {component: GameOverComponent, path: ''}
];
