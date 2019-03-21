import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinfoComponent } from './updateinfo.component';

describe('UpdateinfoComponent', () => {
  let component: UpdateinfoComponent;
  let fixture: ComponentFixture<UpdateinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
