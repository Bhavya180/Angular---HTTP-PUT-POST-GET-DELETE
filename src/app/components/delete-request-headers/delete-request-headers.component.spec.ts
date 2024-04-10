import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRequestHeadersComponent } from './delete-request-headers.component';

describe('DeleteRequestHeadersComponent', () => {
  let component: DeleteRequestHeadersComponent;
  let fixture: ComponentFixture<DeleteRequestHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteRequestHeadersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteRequestHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
