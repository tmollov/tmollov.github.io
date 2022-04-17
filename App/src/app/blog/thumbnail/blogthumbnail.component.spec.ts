import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogThumbnailComponent } from './blogthumbnail.component';

describe('ThumbnailComponent', () => {
  let component: BlogThumbnailComponent;
  let fixture: ComponentFixture<BlogThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
