import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
//import { toPromise } from 'rxjs/operators/toPromise'

import { Product } from './product.model';
import { Console } from '@angular/core/src/console';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  oh:string
  selectedProduct: Product;
  products: Product[];
  readonly baseURL = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  postProduct(prod : Product){
    return this.http.post(this.baseURL, prod);
  }

  getTotalCount(){
    var doneNow = false
    this.http.get(`${this.baseURL}/total_count`).forEach(element => {
      if(doneNow == false){
        this.oh = element[0]['totalCount'];
        doneNow = true
      }
    });
    return this.oh;
  }
}
