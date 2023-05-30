import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponentComponent} from "./test-component/test-component.component";
import {AppComponent} from "./app.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {
    path:'details',
    component: DetailsComponent,
    title: 'Details Page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
