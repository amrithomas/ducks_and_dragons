import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';


@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('1000ms ease-out', keyframes([
          style({ opacity: 0, transform: 'scale(0)', offset: 0 }),
          style({ opacity: 1, transform: 'scale(1)', offset: 1.0 })
        ]))
      ]),
    ])
  ]
})
export class HomePageComponent {
  public title = 'home';

}
