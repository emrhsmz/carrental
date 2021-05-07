import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  apiControllerUrl = `${environment.apiUrl}/countries`;
  constructor(private httpClient:HttpClient) { }


  add(country:Country):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/add`,
      country
    );
  }

  
}
