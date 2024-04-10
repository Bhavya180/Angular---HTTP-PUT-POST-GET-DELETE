import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRequestErrorHandlingCallbackComponent } from './post-request-error-handling-callback.component';

describe('PostRequestErrorHandlingCallbackComponent', () => {
  let component: PostRequestErrorHandlingCallbackComponent;
  let fixture: ComponentFixture<PostRequestErrorHandlingCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostRequestErrorHandlingCallbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostRequestErrorHandlingCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
