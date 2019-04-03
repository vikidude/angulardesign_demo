import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattabledemoComponent } from './mattabledemo.component';

describe('MattabledemoComponent', () => {
  let component: MattabledemoComponent;
  let fixture: ComponentFixture<MattabledemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattabledemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattabledemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
