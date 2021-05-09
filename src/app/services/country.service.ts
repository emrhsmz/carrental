import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  apiControllerUrl = `${environment.apiUrl}/countries`;

  constructor(private httpClient: HttpClient) {}

  add(country: Country): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/add`,
      country
    );
  }

  get(): Observable<ListResponseModel<Country>> {
    return this.httpClient.get<ListResponseModel<Country>>(
      `${this.apiControllerUrl}/getall`
    );
  }

  getCountryById(id: number): Observable<SingleResponseModel<Country>> {
    return this.httpClient.get<SingleResponseModel<Country>>(
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }

  update(country: Country): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/update`,
      country
    );
  }

  delete(country: Country): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/delete`,
      country
    );
  }
}
