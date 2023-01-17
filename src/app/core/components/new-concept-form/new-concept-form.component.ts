import { Component } from '@angular/core';
import { ConceptType } from '../../@types/concepts';

@Component({
  selector: 'app-new-concept-form',
  templateUrl: './new-concept-form.component.html',
  styleUrls: ['./new-concept-form.component.css']
})
export class NewConceptFormComponent {
  newConcept = <ConceptType>{};

  onSubmit() {
    console.log(this.newConcept);
    
  }

  test(any: any) {
    console.log(any);
    
  }
}
