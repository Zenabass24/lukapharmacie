import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPharmacieComponent } from './gestion-pharmacie.component';

describe('GestionPharmacieComponent', () => {
  let component: GestionPharmacieComponent;
  let fixture: ComponentFixture<GestionPharmacieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPharmacieComponent]
    });
    fixture = TestBed.createComponent(GestionPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
