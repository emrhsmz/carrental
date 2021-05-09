import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';
import { CityDetail } from '../models/cityDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CityService {

  apiControllerUrl = `${environment.apiUrl}/cities`;

  constructor(private httpClient: HttpClient) {}

  add(city: City): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/add`,
      city
    );
  }

  get(): Observable<ListResponseModel<City>> {
    return this.httpClient.get<ListResponseModel<City>>(
      `${this.apiControllerUrl}/getall`
    );
  }

  getCityById(id: number): Observable<SingleResponseModel<City>> {
    return this.httpClient.get<SingleResponseModel<City>>(
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }

  getCityDetails(): Observable<ListResponseModel<CityDetail>> {
    return this.httpClient.get<ListResponseModel<CityDetail>>(
      `${this.apiControllerUrl}/getcitydetails`
    );
  }

  getCountryDetailsByCountryId(countryId: number): Observable<ListResponseModel<CityDetail>> {
    return this.httpClient.get<ListResponseModel<CityDetail>>(
      `${this.apiControllerUrl}//api/cities/getdetailbycountryId?countryId=${countryId}`
    );
  }

  update(city: City): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/update`,
      city
    );
  }

  delete(city: City): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/delete`,
      city
    );
  }
}
