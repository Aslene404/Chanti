import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTabComponent } from './staff-tab.component';

describe('StaffTabComponent', () => {
  let component: StaffTabComponent;
  let fixture: ComponentFixture<StaffTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
