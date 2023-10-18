import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCharacterPageComponent } from './components/new-character/new-character.component';
import { HomePageComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component:  HomePageComponent},       // Rota da página inicial
  { path: 'new-character', component:  NewCharacterPageComponent}  // Rota da página de produtos
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
