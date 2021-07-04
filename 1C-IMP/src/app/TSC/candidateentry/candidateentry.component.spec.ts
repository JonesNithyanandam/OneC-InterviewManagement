import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateentryComponent } from './candidateentry.component';

describe('CandidateentryComponent', () => {
  let component: CandidateentryComponent;
  let fixture: ComponentFixture<CandidateentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
