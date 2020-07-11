import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNComponent } from './button-n.component';

describe('ButtonNComponent', () => {
  let component: ButtonNComponent;
  let fixture: ComponentFixture<ButtonNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
