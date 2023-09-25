import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewFournisseurComponent } from './dialog-new-fournisseur.component';

describe('DialogNewFournisseurComponent', () => {
  let component: DialogNewFournisseurComponent;
  let fixture: ComponentFixture<DialogNewFournisseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNewFournisseurComponent]
    });
    fixture = TestBed.createComponent(DialogNewFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
