import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IUser } from '../models/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  base_url: string = environment.base_url + '/users';
  constructor(private http: HttpClient) {}

  register(userData: IUser): Observable<string> {
    return this.http.post<string>(`${this.base_url}/register`,userData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true,
    });
  }
}
