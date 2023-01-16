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
    hover = false;
    isSelected = false
    onTogglePopover = false;
    isNewConceptButton = false;

    onHandleSelectConcept() {
      this.selectedConcept.emit();
    }

    togglePopover() {
      this.onTogglePopover = !this.onTogglePopover;
    }

    ngOnInit(): void {
      this.isNewConceptButton = this.concept.id ? false : true;
    }
}
