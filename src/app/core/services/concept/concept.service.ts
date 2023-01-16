import { Injectable } from '@angular/core';
import { ConceptType } from '../../@types/concepts.d';
import { CONCEPTS } from '../../constants/mock-concepts';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ConceptService {

  constructor() { }

  getConcepts(): Observable<ConceptType[]> {
    const concepts = of(CONCEPTS)
    return concepts;
  }

  setNewConcept(newConcept: ConceptType): any {
    const concepts = this.getConcepts().subscribe()

    console.log(concepts);
    
  }
}
