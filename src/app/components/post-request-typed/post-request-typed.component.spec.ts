import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRequestTypedComponent } from './post-request-typed.component';

describe('PostRequestTypedComponent', () => {
  let component: PostRequestTypedComponent;
  let fixture: ComponentFixture<PostRequestTypedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostRequestTypedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostRequestTypedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
