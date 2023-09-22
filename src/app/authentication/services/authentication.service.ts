import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, timeout } from 'rxjs';


interface AgentData {
  username: string,
  agentPassword: string
}

const baseUrl = "http://127.0.0.1:8002/api/v1/agents"

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
