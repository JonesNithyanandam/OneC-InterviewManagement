import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainCompComponent } from './main-comp.component';

describe('MainCompComponent', () => {
  let component: MainCompComponent;
  let fixture: ComponentFixture<MainCompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
