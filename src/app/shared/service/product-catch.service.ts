import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductCatchService {
   baseUrl = environment.baseUrl;
   constructor(private http: HttpClient) { }
   getAllProducts() {
     return this.http.get(this.baseUrl + '/products');
   }
}
