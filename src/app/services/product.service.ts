import { Injectable } from '@angular/core';
import { data } from '../MockData';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  products = data;
    api = 'https://5e7c77c2a917d70016683561.mockapi.io/product'
  constructor(
        private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.api}`);
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  removeProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
    // return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(product): Observable<Product>{
    return this.http.post<Product>(`${this.api}`, product);
    // console.log(product);

    // let newObj = {id: 6,...product};
    // console.log(newObj);
    
    // this.products.push(newObj);
    // console.log(this.products)
  }
  editProduct(){

  }
  addCartProduct(){

  }
  updateProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
}