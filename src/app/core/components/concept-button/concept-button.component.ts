import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConceptType } from '../../@types/concepts.d';

@Component({
  selector: 'app-concept-button',
  templateUrl: './concept-button.component.html',
  styleUrls: ['./concept-button.component.css']
})
export class ConceptButtonComponent {
    @Input() concept: ConceptType = <ConceptType>{};
    @Output() selectedConcept = new EventEmitter();
    hover = false;
    isSelected = false
    onTogglePopover = false;
    isNewConceptButton = false;

    ngOnInit(): void {
      this.isNewConceptButton = this.concept.id ? false : true;
    }

    onHandleSelectConcept() {
      this.selectedConcept.emit();
      this.isSelected = true;
    }

    togglePopover() {
      this.onTogglePopover = !this.onTogglePopover;
    }
}
