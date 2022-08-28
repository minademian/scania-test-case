import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTableViewComponent } from './driver-table-view.component';

describe('DriverTableViewComponent', () => {
  let component: DriverTableViewComponent;
  let fixture: ComponentFixture<DriverTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTableViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
