import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewLivraisonComponent } from './dialog-new-livraison.component';

describe('DialogNewLivraisonComponent', () => {
  let component: DialogNewLivraisonComponent;
  let fixture: ComponentFixture<DialogNewLivraisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNewLivraisonComponent]
    });
    fixture = TestBed.createComponent(DialogNewLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
