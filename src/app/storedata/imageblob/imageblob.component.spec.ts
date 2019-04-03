import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageblobComponent } from './imageblob.component';

describe('ImageblobComponent', () => {
  let component: ImageblobComponent;
  let fixture: ComponentFixture<ImageblobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageblobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageblobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
