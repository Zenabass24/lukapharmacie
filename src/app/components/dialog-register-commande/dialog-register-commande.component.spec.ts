import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegisterCommandeComponent } from './dialog-register-commande.component';

describe('DialogRegisterCommandeComponent', () => {
  let component: DialogRegisterCommandeComponent;
  let fixture: ComponentFixture<DialogRegisterCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRegisterCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRegisterCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
