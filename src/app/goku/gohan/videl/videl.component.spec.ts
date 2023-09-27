import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidelComponent } from './videl.component';

describe('VidelComponent', () => {
  let component: VidelComponent;
  let fixture: ComponentFixture<VidelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VidelComponent]
    });
    fixture = TestBed.createComponent(VidelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
