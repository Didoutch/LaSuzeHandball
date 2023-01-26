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
import { BackgroundComponent } from './background/background.component';
import { ContactComponent } from './contact/contact.component';
import { LightgalleryModule } from 'lightgallery/angular/13';
import { SouvenirsComponent } from './souvenirs/souvenirs.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AutoOpenMenuComponent } from './auto-open-menu/auto-open-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlocInfosComponent,
    EquipeComponent,
    AccueilComponent,
    CarousselComponent,
    BackgroundComponent,
    ContactComponent,
    SouvenirsComponent,
    SponsorsComponent,
    AutoOpenMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    LightgalleryModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
