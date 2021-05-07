import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGroupDashboardComponent } from './customer-group-dashboard.component';

describe('CustomerGroupDashboardComponent', () => {
  let component: CustomerGroupDashboardComponent;
  let fixture: ComponentFixture<CustomerGroupDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerGroupDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGroupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
