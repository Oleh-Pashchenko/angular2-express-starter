import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  constructor(private http: Http) {}

   testMethod(): Observable<any> {
    return this.http.get('/api');
  }
};
