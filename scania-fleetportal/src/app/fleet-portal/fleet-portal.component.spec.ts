import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetPortalComponent } from './fleet-portal.component';

describe('FleetPortalComponent', () => {
  let component: FleetPortalComponent;
  let fixture: ComponentFixture<FleetPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
