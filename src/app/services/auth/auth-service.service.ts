import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment.development';
import { Signup } from '../../types/signup';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {}
