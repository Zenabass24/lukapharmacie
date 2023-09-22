import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegisterMaterielComponent } from './dialog-register-materiel.component';

describe('DialogRegisterMaterielComponent', () => {
  let component: DialogRegisterMaterielComponent;
  let fixture: ComponentFixture<DialogRegisterMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRegisterMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRegisterMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
