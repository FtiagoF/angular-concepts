import { Component } from '@angular/core';
import { ConceptType } from './core/@types/concepts';

import { CONCEPTS } from './core/constants/mock-concepts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Concepts';
  concepts = CONCEPTS;
  selectedConcept = {};

  onSelectConcept(concept: ConceptType) {
    alert(concept.title)
  }
}
