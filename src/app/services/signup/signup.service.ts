import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from '../../types/signup';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private http = inject(HttpClient);
  private apiUserData = `${environment.apiURL}auth/register`;

  signup(signupData: Signup): Observable<any> {
    return this.http.post<any>(this.apiUserData, signupData);
  }
}
