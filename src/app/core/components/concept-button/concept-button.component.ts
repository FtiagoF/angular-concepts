import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConceptType } from '../../@types/concepts.d';

@Component({
  selector: 'app-concept-button',
  templateUrl: './concept-button.component.html',
  styleUrls: ['./concept-button.component.css']
})
export class ConceptButtonComponent {
    @Input() concept = <ConceptType|undefined>undefined;
    @Output() selectedConceptEvent = new EventEmitter();
    hover = false;
    isSelected = false

    handleSelectConcept() {
      this.selectedConceptEvent.emit();
      this.isSelected = true;
    }
}
