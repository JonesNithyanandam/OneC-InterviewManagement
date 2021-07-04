import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcandidatestatusComponent } from './viewcandidatestatus.component';

describe('ViewcandidatestatusComponent', () => {
  let component: ViewcandidatestatusComponent;
  let fixture: ComponentFixture<ViewcandidatestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcandidatestatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcandidatestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
