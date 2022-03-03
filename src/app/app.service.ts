import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://gorest.co.in/public/v2/todos');
  }
}
