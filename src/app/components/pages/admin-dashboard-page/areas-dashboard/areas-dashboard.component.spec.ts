import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasDashboardComponent } from './areas-dashboard.component';

describe('AreasDashboardComponent', () => {
  let component: AreasDashboardComponent;
  let fixture: ComponentFixture<AreasDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
