import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCallComponent } from './staff-call.component';

describe('StaffCallComponent', () => {
  let component: StaffCallComponent;
  let fixture: ComponentFixture<StaffCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
