import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Class } from '../models/class';
import { ClassDetail } from '../models/class-detail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  apiControllerUrl = `${environment.apiUrl}/classes`;

  constructor(private  httpClient: HttpClient) { }

  add(classModel: Class): Observable<ResponseModel>{
    return  this.httpClient.post<ResponseModel>
    (
  `${this.apiControllerUrl}/add`,
  classModel
    );
  }

  update(classModel: Class): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/update`,
      classModel
    );
  }

  delete(classModel: Class): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/delete`,
      classModel
    );
  }

  getAll(): Observable<ListResponseModel<Class>>{
    return  this.httpClient.get<ListResponseModel<Class>>
    (
      `${this.apiControllerUrl}/getall`
    );
  }

  getClassById(id: number): Observable<SingleResponseModel<Class>>{
    return this.httpClient.get<SingleResponseModel<Class>>
    (
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }

  getClassDetails(): Observable<ListResponseModel<ClassDetail>> {
    return this.httpClient.get<ListResponseModel<ClassDetail>>(
      `${this.apiControllerUrl}/getclassdetails`
    );
  }
}
