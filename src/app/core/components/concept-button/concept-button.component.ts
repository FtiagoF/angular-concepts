import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConceptType } from '../../@types/concepts';

@Component({
  selector: 'app-concept-button',
  templateUrl: './concept-button.component.html',
  styleUrls: ['./concept-button.component.css']
})
export class ConceptButtonComponent {
    @Input() concept: ConceptType = <ConceptType>{};
    @Output() selectedConcept = new EventEmitter();


    onHandleSelectConcept() {
      this.selectedConcept.emit();
    }
}
