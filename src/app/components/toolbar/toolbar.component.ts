import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { NotificationsService } from 'src/app/services/notifications.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {



  @Input() inputSidenav!: MatSidenav;

  @Input() public title: string | undefined

  @Input() public color_!: string | undefined
  @Input() public text_color_!: string | undefined

  togglerOfMenu:boolean = true

  @Output()

  public menuClickedToOn: EventEmitter<boolean> = new EventEmitter<boolean> (this.togglerOfMenu)

  constructor( 
    private readonly router: Router, 
    private location: Location,
    public commonService: CommonService,
    public notificationsService: NotificationsService,
    ) { }

  ngOnInit(): void {

    this.user = JSON.parse(Object(window.localStorage.getItem('token')))

  }

  public goBack () {
    this.location.back()
  }

  color: ThemePalette = 'accent';

  public user: any



  toggleMenu () {

    this.menuClickedToOn.emit(!this.togglerOfMenu);

    this.togglerOfMenu = !this.togglerOfMenu

  }

  onDisconnect () {

    window.localStorage.clear()

    this.commonService.isAuth = false

    this.router.navigate([''])

  }

  public async showNotifications() {
    const dialog = await this.notificationsService.presentDialog()
  }



}
