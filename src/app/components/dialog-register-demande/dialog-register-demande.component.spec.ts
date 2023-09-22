import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegisterDemandeComponent } from './dialog-register-demande.component';

describe('DialogRegisterDemandeComponent', () => {
  let component: DialogRegisterDemandeComponent;
  let fixture: ComponentFixture<DialogRegisterDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRegisterDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRegisterDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
