import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesDashboardComponent } from './cities-dashboard.component';

describe('CitiesDashboardComponent', () => {
  let component: CitiesDashboardComponent;
  let fixture: ComponentFixture<CitiesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
