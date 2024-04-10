import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRequestTypedComponent } from './get-request-typed.component';

describe('GetRequestTypedComponent', () => {
  let component: GetRequestTypedComponent;
  let fixture: ComponentFixture<GetRequestTypedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetRequestTypedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetRequestTypedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
