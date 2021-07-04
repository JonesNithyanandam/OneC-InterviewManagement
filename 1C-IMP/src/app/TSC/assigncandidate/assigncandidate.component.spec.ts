import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigncandidateComponent } from './assigncandidate.component';

describe('AssigncandidateComponent', () => {
  let component: AssigncandidateComponent;
  let fixture: ComponentFixture<AssigncandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigncandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigncandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
