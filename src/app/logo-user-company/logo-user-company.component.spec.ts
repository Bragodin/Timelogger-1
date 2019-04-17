import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoUserCompanyComponent } from './logo-user-company.component';

describe('LogoUserCompanyComponent', () => {
  let component: LogoUserCompanyComponent;
  let fixture: ComponentFixture<LogoUserCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoUserCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoUserCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
