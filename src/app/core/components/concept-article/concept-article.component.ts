import { Component, Input } from '@angular/core';
import { ConceptType } from '../../@types/concepts';

@Component({
  selector: 'app-concept-article',
  templateUrl: './concept-article.component.html',
  styleUrls: ['./concept-article.component.css']
})
export class ConceptArticleComponent {
  @Input() concept: ConceptType = <ConceptType>{};
}
