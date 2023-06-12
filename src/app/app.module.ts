import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetPageComponent } from './planet-page/planet-page.component';
import { StarShipsComponent } from './star-ships/star-ships.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'planet-page', component: PlanetPageComponent },
  { path: 'star-ships', component: StarShipsComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', redirectTo: '/homepage' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PlanetPageComponent,
    StarShipsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
