import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulatdemoComponent } from './populatdemo.component';

describe('PopulatdemoComponent', () => {
  let component: PopulatdemoComponent;
  let fixture: ComponentFixture<PopulatdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulatdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulatdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
