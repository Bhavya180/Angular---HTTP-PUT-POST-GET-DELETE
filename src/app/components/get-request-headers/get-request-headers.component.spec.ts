import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRequestHeadersComponent } from './get-request-headers.component';

describe('GetRequestHeadersComponent', () => {
  let component: GetRequestHeadersComponent;
  let fixture: ComponentFixture<GetRequestHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetRequestHeadersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetRequestHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
