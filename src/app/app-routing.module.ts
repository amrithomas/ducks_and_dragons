import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCharacterPageComponent } from './components/new-character/new-character.component';
import { HomePageComponent } from './components/home/home.component';
import { SpellsPageComponent } from './components/spells/spells.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },   
  { path: 'new-character', component: NewCharacterPageComponent },
  { path: 'spells', component: SpellsPageComponent } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
