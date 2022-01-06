import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api_URL = 'http://localhost:8080/api/v1/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(userName: string, password: string) {

    return this.http.post(api_URL, { userName, password })

  }
}
