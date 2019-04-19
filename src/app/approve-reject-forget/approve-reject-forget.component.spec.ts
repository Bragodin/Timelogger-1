import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRejectForgetComponent } from './approve-reject-forget.component';

describe('ApproveRejectForgetComponent', () => {
  let component: ApproveRejectForgetComponent;
  let fixture: ComponentFixture<ApproveRejectForgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveRejectForgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRejectForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
