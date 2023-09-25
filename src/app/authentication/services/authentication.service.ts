import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, timeout } from 'rxjs';
import { SERVER_URL } from 'src/app/url';


interface AgentData {
  username: string,
  agentPassword: string
}

const baseUrl = `${SERVER_URL}/agents`

const headers= new HttpHeaders()
.set('content-type', 'application/json')
  
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  constructor(
    private readonly http: HttpClient
  ) { }

  public agentLogin (agentData: AgentData): Observable<any> {
    return this.http.post(`${baseUrl}/login`, agentData, {headers} ).pipe(
      timeout(5000),
      tap (res => {
        console.log('RESULT...', res)
      })
    )
  }
}
