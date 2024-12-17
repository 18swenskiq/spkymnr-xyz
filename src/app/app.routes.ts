import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects-view/projects.component';
import { GamesViewComponent } from './games-view/games-view.component';

export const routes: Routes = [
  { path: 'games', component: GamesViewComponent },
  { path: 'projects', component: ProjectsComponent },
];
