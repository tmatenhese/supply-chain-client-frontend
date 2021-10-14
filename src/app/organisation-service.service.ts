import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrganisationDao } from './organisation-dao';
import { Product } from './product';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrganisationServiceService {
  private baseUrl = 'http://localhost:8090/product/';
  constructor(private http: HttpClient) { 

  }

  getProductList(query = {}): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getProduct(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl} ${id}`,httpOptions);
  }

  createProduct(organisationDao: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}add-new`, organisationDao,httpOptions);
  }
  changeOwner(id: string, newOwner: string): Observable<Object> {
    return this.http.put(`${this.baseUrl}change-owner/${id}/${newOwner}`, httpOptions);
  }
}
const httpOptions = {
  headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  })
};
