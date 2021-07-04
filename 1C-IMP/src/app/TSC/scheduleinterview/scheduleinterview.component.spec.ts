import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleinterviewComponent } from './scheduleinterview.component';

describe('ScheduleinterviewComponent', () => {
  let component: ScheduleinterviewComponent;
  let fixture: ComponentFixture<ScheduleinterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleinterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
