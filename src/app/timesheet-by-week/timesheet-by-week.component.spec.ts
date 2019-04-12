import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetByWeekComponent } from './timesheet-by-week.component';

describe('TimesheetByWeekComponent', () => {
  let component: TimesheetByWeekComponent;
  let fixture: ComponentFixture<TimesheetByWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetByWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetByWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
