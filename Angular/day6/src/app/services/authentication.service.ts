import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IUser } from '../models/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  base_url: string = environment.base_url + '/users';
  isAdminBS!:BehaviorSubject<boolean>
  isLoginBS!: BehaviorSubject<boolean>;
  
  
  get isLogin():boolean{
    return localStorage.getItem('token')?true:false
  }
  get isAdmin():boolean{
    return localStorage.getItem('role')=='admin'?true:false
  }

  constructor(private http: HttpClient) {
    this.isLoginBS= new BehaviorSubject(this.isLogin);
    this.isAdminBS=new BehaviorSubject(this.isAdmin);
  }

  register(userData: IUser): Observable<string> {
    return this.http.post<string>(`${this.base_url}/register`, userData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  login(userData: any): Observable<any> {
    let res= this.http.post<any>(`${this.base_url}/login`, userData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response',
    });
    this.isLoginBS.next(true);
    return res;
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    this.isLoginBS.next(false)
    this.isAdminBS.next(false)
  }
}
