import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutRequestErrorHandlingComponent } from './put-request-error-handling.component';

describe('PutRequestErrorHandlingComponent', () => {
  let component: PutRequestErrorHandlingComponent;
  let fixture: ComponentFixture<PutRequestErrorHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutRequestErrorHandlingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PutRequestErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
