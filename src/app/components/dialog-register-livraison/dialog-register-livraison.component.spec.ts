import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegisterLivraisonComponent } from './dialog-register-livraison.component';

describe('DialogRegisterLivraisonComponent', () => {
  let component: DialogRegisterLivraisonComponent;
  let fixture: ComponentFixture<DialogRegisterLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRegisterLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRegisterLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
