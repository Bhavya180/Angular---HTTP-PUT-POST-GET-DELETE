import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutRequestTypedComponent } from './put-request-typed.component';

describe('PutRequestTypedComponent', () => {
  let component: PutRequestTypedComponent;
  let fixture: ComponentFixture<PutRequestTypedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutRequestTypedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PutRequestTypedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
