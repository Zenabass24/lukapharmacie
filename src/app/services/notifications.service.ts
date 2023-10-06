import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_URL } from '../url';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private headers!: HttpHeaders
  private baseURL!: string


  constructor(
    private dialog: MatDialog,
    private readonly http: HttpClient,
    private router: Router
  ) { 
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    var localStorage = window.localStorage.getItem('token')
    if (localStorage) {
      var token = JSON.parse(Object(localStorage))  
      this.baseURL = `${SERVER_URL}/notifications/pharmacies/${token.pharmacieRef}`      
    } else {
      // this.router.navigate(['/'])
    }

  }

  public async presentDialog () {
    const dialogRef = this.dialog.open(
      NotificationsComponent,
      {width: '700px'}
    )

    dialogRef.afterClosed().subscribe(
      (result: any) => {
        console.log ('Notification dialogue result...', result)
      }
    )
  }

  public async dismissDialog () {
    this.dialog.closeAll()
  }

  public getPharmNotifications (): Observable<any> {
    return this.http.get(`${this.baseURL}/get`).pipe(
      tap( (e) => { console.log ("Result Notifications: ", e)})
    )
  }
}
