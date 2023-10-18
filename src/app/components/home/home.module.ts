import { NgModule } from '@angular/core';
import { HomePageComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        
    ],

})
export class HomePageModule { }
