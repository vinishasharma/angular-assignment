import {LoginComponent} from './login/login.component';
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {YoutubeComponent} from './youtube/youtube.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
  path: 'login',
  component: LoginComponent
},
  {
    path: 'home',
    component: HomeComponent,
  },
  {
      path: 'youtube/:id',
      component: YoutubeComponent
    }
];
