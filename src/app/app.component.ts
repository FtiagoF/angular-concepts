import { Component } from '@angular/core';

import { CONCEPTS } from './core/constants/mock-concepts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Concepts';
  concepts = CONCEPTS;
}
