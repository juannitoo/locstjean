import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationComponent } from './locations/location/location.component';
import { LocationDetailsComponent } from './locations/location-details/location-details.component';
import { ContratComponent } from './contrat/contrat.component';
import { EtatComponent } from './etat/etat.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

// services
import { LocationsService } from './services/locations.services';
import { AuthService } from './services/auth.services';


const appRoutes: Routes = [
  { path: 'locations', component: LocationsComponent },
  { path: 'locations/:id', component: LocationDetailsComponent },
  { path: 'contrat', component: ContratComponent },
  { path: 'etat-des-lieux', component: EtatComponent },
  { path: 'inscription-connexion', component: AuthComponent },
  { path: '', component: HomeComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LocationsComponent,
    ContratComponent,
    EtatComponent,
    FourOhFourComponent,
    HomeComponent,
    HeaderComponent,
    LocationComponent,
    LocationDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AuthService, LocationsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

