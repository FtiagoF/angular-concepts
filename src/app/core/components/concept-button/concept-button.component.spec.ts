import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptButtonComponent } from './concept-button.component';

describe('ConceptButtonComponent', () => {
  let component: ConceptButtonComponent;
  let fixture: ComponentFixture<ConceptButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
