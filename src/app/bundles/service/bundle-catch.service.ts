import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BundleCatchService {
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllBundles() {
    return this.http.get(this.baseUrl + '/bundles');
  }

}
