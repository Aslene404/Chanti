import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontProjectsComponent } from './front-projects.component';

describe('FrontProjectsComponent', () => {
  let component: FrontProjectsComponent;
  let fixture: ComponentFixture<FrontProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
