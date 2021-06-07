import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetail } from '../models/car-detail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiControllerUrl = `${environment.apiUrl}/cars`;

  constructor(private  httpClient: HttpClient) { }

  add(carModel: Car): Observable<ResponseModel>{
    return  this.httpClient.post<ResponseModel>
    (
  `${this.apiControllerUrl}/add`,
  carModel
    );
  }

  update(carModel: Car): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/update`,
      carModel
    );
  }

  delete(carModel: Car): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/delete`,
      carModel
    );
  }

  getAll(): Observable<ListResponseModel<Car>>{
    return  this.httpClient.get<ListResponseModel<Car>>
    (
      `${this.apiControllerUrl}/getall`
    );
  }

  getCarById(id: number): Observable<SingleResponseModel<Car>>{
    return this.httpClient.get<SingleResponseModel<Car>>
    (
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      `${this.apiControllerUrl}/getcardetails`
    );
  }
}
