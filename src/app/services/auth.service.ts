import { HttpClient } from '@angular/common/http';
import { Token } from '../models/token';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserDetail } from '../models/userDetail';
import { AppState } from '../store/app.reducer';
import { deleteUserDetail, setUserDetail } from '../store/auth/auth.actions';
import { LocalStorageService } from './local-storage.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;
  userDetail$: Observable<UserDetail | undefined> = this.store
    .select((s) => s.appAuth)
    .pipe(map((b) => b.userDetail));

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private store: Store<AppState>
  ) {}

  login(loginModel: Login): Observable<SingleResponseModel<Token>> {
    return this.httpClient.post<SingleResponseModel<Token>>(
      `${this.apiControllerUrl}/login`,
      loginModel
    );
  }

  register(
    registerModel: Register
  ): Observable<SingleResponseModel<Token>> {
    return this.httpClient.post<SingleResponseModel<Token>>(
      `${this.apiControllerUrl}/register`,
      registerModel
    );
  }

  logout() {
    this.localStorageService.remove('tokenModel');
    this.localStorageService.remove('userMail');
    this.deleteUserDetail();
  }

  isAuthenticated(
    userMail?: string | null,
    requiredRoles?: string[]
  ): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(
      `${this.apiControllerUrl}/isauthenticated`,
      {
        params:
          userMail && requiredRoles
            ? {
                userMail: userMail,
                requiredRoles: requiredRoles.join(','),
              }
            : {},
      }
    );
  }

  setUserDetail(userDetail: UserDetail) {
    this.store.dispatch(setUserDetail({ userDetail: userDetail }));
  }

  deleteUserDetail() {
    this.store.dispatch(deleteUserDetail());
  }
}