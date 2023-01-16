import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConceptFormComponent } from './new-concept-form.component';

describe('NewConceptFormComponent', () => {
  let component: NewConceptFormComponent;
  let fixture: ComponentFixture<NewConceptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConceptFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewConceptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
