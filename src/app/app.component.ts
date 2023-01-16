import { Component } from '@angular/core';
import { ConceptType } from './core/@types/concepts';

import { ConceptService } from './core/services/concept/concept.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private conceptService: ConceptService) {}

  title = 'Angular Concepts';
  concepts: ConceptType[] = [];
  selectedConcept = <ConceptType>{};

  getConcepts(): void {
    this.conceptService.getConcepts().subscribe(concepts => this.concepts = concepts)
  }

  onSelectConcept(concept: ConceptType) {
    this.selectedConcept = concept;
  }

  ngOnInit(): void {
    this.getConcepts();
  }
}
