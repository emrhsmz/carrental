import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiControllerUrl = `${environment.apiUrl}/brands`;
  
  constructor(private httpClient: HttpClient) { }

  add(brand: Brand): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/add`,
      brand
    );
  }
  
  update(brand: Brand): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/update`,
      brand
    );
  }

  delete(brand: Brand): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/delete`,
      brand
    );
  }

  getAll(): Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>
    (
      `${this.apiControllerUrl}/getall`
    );
  }

  getBrandId(id: number): Observable<SingleResponseModel<Brand>>{
    return this.httpClient.get<SingleResponseModel<Brand>>
    (
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }
}
