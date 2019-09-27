import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RandomComponent} from './components/random/random.component';
import {DeveloperComponent} from './components/developer/developer.component';

const routes: Routes = [
  { path: 'random', component: RandomComponent},
  { path: 'developer', component: DeveloperComponent},
  { path: '**', component: DeveloperComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
