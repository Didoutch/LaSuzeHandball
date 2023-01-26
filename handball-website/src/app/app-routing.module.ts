import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { EquipeComponent } from './equipe/equipe.component';
import { SouvenirsComponent } from './souvenirs/souvenirs.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

const routes: Routes = [
    { path: 'accueil', component: AccueilComponent, data: {idHeader: 0} },
    { path: 'club', component: EquipeComponent, data: {idHeader: 1}},
    { path: 'equipes', component: EquipeComponent, data: {idHeader: 2}},
    { path: 'souvenirs', component: SouvenirsComponent, data: {idHeader: 3}},
    { path: 'sponsors', component: SponsorsComponent, data: {idHeader: 4}},
    { path: 'contact', component: ContactComponent, data: {idHeader: 5}},
    { path: '',   redirectTo: 'accueil', pathMatch: 'full' }, 
    { path: '**', redirectTo: 'accueil', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
