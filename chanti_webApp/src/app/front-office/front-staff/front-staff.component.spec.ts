import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontStaffComponent } from './front-staff.component';

describe('FrontStaffComponent', () => {
  let component: FrontStaffComponent;
  let fixture: ComponentFixture<FrontStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
