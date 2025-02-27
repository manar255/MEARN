import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private base_url = environment.base_url;
  private apiUrl = this.base_url + '/products';

  constructor(private http: HttpClient) {}

  addProduct(productData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, productData);
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductById(productId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${productId}`);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${productId}`);
  }
  getProductsByQuery(query: any): Observable<any[]> {
    let params = new HttpParams();
    for (const key in query) {
      if (query.hasOwnProperty(key)) {
        params = params.append(key, query[key]);
      }
    }
    return this.http.get<any[]>(this.apiUrl, { params });
  }
}
