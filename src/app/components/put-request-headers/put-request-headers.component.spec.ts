import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutRequestHeadersComponent } from './put-request-headers.component';

describe('PutRequestHeadersComponent', () => {
  let component: PutRequestHeadersComponent;
  let fixture: ComponentFixture<PutRequestHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutRequestHeadersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PutRequestHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
