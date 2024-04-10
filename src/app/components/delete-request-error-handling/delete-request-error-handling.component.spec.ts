import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRequestErrorHandlingComponent } from './delete-request-error-handling.component';

describe('DeleteRequestErrorHandlingComponent', () => {
  let component: DeleteRequestErrorHandlingComponent;
  let fixture: ComponentFixture<DeleteRequestErrorHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteRequestErrorHandlingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteRequestErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
