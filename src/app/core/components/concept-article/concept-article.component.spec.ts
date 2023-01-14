import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptArticleComponent } from './concept-article.component';

describe('ConceptArticleComponent', () => {
  let component: ConceptArticleComponent;
  let fixture: ComponentFixture<ConceptArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
