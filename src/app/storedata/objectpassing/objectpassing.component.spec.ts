import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectpassingComponent } from './objectpassing.component';

describe('ObjectpassingComponent', () => {
  let component: ObjectpassingComponent;
  let fixture: ComponentFixture<ObjectpassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectpassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectpassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
