import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaintesComponent } from './plaintes.component';

describe('PlaintesComponent', () => {
  let component: PlaintesComponent;
  let fixture: ComponentFixture<PlaintesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaintesComponent]
    });
    fixture = TestBed.createComponent(PlaintesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
