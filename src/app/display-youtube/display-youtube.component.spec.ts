import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayYoutubeComponent } from './display-youtube.component';

describe('DisplayYoutubeComponent', () => {
  let component: DisplayYoutubeComponent;
  let fixture: ComponentFixture<DisplayYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
