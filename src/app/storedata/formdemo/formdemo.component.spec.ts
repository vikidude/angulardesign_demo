import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdemoComponent } from './formdemo.component';

describe('FormdemoComponent', () => {
  let component: FormdemoComponent;
  let fixture: ComponentFixture<FormdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
