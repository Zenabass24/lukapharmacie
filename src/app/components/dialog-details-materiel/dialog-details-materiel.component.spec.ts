import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetailsMaterielComponent } from './dialog-details-materiel.component';

describe('DialogDetailsMaterielComponent', () => {
  let component: DialogDetailsMaterielComponent;
  let fixture: ComponentFixture<DialogDetailsMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetailsMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDetailsMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
