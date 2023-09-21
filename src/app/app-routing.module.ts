import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path: '', redirectTo: 'profile', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'journey' , loadComponent: () => import('./journey/journey.component'). then(value => value.JourneyComponent)},
  {path: 'experience' , loadComponent: () => import('./experience/experience.component'). then(value => value.ExperienceComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
