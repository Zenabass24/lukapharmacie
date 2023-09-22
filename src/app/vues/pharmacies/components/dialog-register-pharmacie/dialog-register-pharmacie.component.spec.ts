import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegisterPharmacieComponent } from './dialog-register-pharmacie.component';

describe('DialogRegisterPharmacieComponent', () => {
  let component: DialogRegisterPharmacieComponent;
  let fixture: ComponentFixture<DialogRegisterPharmacieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogRegisterPharmacieComponent]
    });
    fixture = TestBed.createComponent(DialogRegisterPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
