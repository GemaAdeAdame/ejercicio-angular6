import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GokuComponent } from './goku.component';

describe('GokuComponent', () => {
  let component: GokuComponent;
  let fixture: ComponentFixture<GokuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GokuComponent]
    });
    fixture = TestBed.createComponent(GokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
