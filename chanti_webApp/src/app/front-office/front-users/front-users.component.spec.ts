import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontUsersComponent } from './front-users.component';

describe('FrontUsersComponent', () => {
  let component: FrontUsersComponent;
  let fixture: ComponentFixture<FrontUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
