import { NgModule } from '@angular/core';
import { HomePageComponent } from './home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations : [
        HomePageComponent
    ], 
    imports : [
        MatButtonModule,
        MatDividerModule,
        MatIconModule
    ],
    bootstrap : [HomePageComponent]
})
export class HomePageModule {}