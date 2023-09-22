import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlertSuppressionComponent } from './dialog-alert-suppression.component';

describe('DialogAlertSuppressionComponent', () => {
  let component: DialogAlertSuppressionComponent;
  let fixture: ComponentFixture<DialogAlertSuppressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAlertSuppressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAlertSuppressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
