import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private base_url = environment.base_url
  private apiUrl = this.base_url+'/categories'; 

  constructor(private http: HttpClient) { }

  
  addCategory(categoryData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, categoryData);
  }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
