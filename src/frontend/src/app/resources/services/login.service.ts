import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/requestLogin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

public doLogin(requestLogin: RequestLogin) : Observable<RequestLogin>{
  return this.httpClient.post<RequestLogin>('http://localhost:8080/api/login',requestLogin);
}


}



