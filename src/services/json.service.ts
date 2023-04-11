import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private http: HttpClient) {}

  getJson() {
    return this.http.get(
      'https://my-json-server.typicode.com/typicode/demo/posts'
    );
  }
}
