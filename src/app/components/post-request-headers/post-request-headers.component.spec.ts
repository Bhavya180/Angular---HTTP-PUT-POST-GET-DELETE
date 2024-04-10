import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRequestHeadersComponent } from './post-request-headers.component';

describe('PostRequestHeadersComponent', () => {
  let component: PostRequestHeadersComponent;
  let fixture: ComponentFixture<PostRequestHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostRequestHeadersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostRequestHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
