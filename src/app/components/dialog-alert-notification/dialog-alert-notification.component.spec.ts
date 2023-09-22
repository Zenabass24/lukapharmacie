import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlertNotificationComponent } from './dialog-alert-notification.component';

describe('DialogAlertNotificationComponent', () => {
  let component: DialogAlertNotificationComponent;
  let fixture: ComponentFixture<DialogAlertNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAlertNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAlertNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
