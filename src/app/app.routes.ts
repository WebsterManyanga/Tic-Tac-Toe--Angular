import { Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PlayComponent } from './play/play.component';

export const routes: Routes = [
  { component: HomeScreenComponent, path: '' },
  { component: PlayComponent, path: 'play' },
];
