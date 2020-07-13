import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontSinginComponent } from './front-singin.component';

describe('FrontSinginComponent', () => {
  let component: FrontSinginComponent;
  let fixture: ComponentFixture<FrontSinginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontSinginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontSinginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
