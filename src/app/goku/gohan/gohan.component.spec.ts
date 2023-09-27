import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GohanComponent } from './gohan.component';

describe('GohanComponent', () => {
  let component: GohanComponent;
  let fixture: ComponentFixture<GohanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GohanComponent]
    });
    fixture = TestBed.createComponent(GohanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
