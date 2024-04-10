import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRequestErrorHandlingCatchErrorComponent } from './post-request-error-handling-catch-error.component';

describe('PostRequestErrorHandlingCatchErrorComponent', () => {
  let component: PostRequestErrorHandlingCatchErrorComponent;
  let fixture: ComponentFixture<PostRequestErrorHandlingCatchErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostRequestErrorHandlingCatchErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostRequestErrorHandlingCatchErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
