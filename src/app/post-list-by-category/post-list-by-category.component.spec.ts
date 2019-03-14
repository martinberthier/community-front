import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListByCategoryComponent } from './post-list-by-category.component';

describe('PostListByCategoryComponent', () => {
  let component: PostListByCategoryComponent;
  let fixture: ComponentFixture<PostListByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
