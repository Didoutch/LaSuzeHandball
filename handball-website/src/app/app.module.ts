import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlocInfosComponent } from './bloc-infos/bloc-infos.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlocInfosComponent,
    EquipeComponent,
    AccueilComponent,
    CarousselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
