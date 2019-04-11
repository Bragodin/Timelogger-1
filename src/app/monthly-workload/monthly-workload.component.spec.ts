import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyWorkloadComponent } from './monthly-workload.component';

describe('MonthlyWorkloadComponent', () => {
  let component: MonthlyWorkloadComponent;
  let fixture: ComponentFixture<MonthlyWorkloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyWorkloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyWorkloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
