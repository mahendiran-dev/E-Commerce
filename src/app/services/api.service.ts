import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get(`${this.url}products/categories`);
  }

  getProductsByCategory(category: string) {
    return this.http.get(`${this.url}products/category/${category}`);
  }

  getProductById(productId: string) {
    return this.http.get(`${this.url}products/${productId}`);
  }

}
