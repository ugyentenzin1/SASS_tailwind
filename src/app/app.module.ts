import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { JourneyComponent } from './journey/journey.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CheckboxModule,
    PaginatorModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
