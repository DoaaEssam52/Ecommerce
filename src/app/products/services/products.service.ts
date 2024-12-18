import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${environment.getAllProducts}`);
  }

  getProductById(productId: number): Observable<Product> {
    return this._httpClient.get<Product>(
      `${environment.getProductById}/${productId}`
    );
  }
}
