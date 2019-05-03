import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyIntegrationComponent } from './company-integration.component';

describe('CompanyIntegrationComponent', () => {
  let component: CompanyIntegrationComponent;
  let fixture: ComponentFixture<CompanyIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
