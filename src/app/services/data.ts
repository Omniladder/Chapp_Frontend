import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// This is legit just a wrapper around the HttpClient I dont know why this has to exist :p

@Injectable({
  providedIn: 'root'
})
export class Data {
  constructor(private http: HttpClient) {}


  getRequest(url: string)  {
    return this.http.get(url);
  }

  postRequest(url: string, payload: any)  {
    return this.http.post(url, payload);
  }

  putRequest(url: string, payload: any) {
    return this.http.put(url, payload);
  }

  deleteRequest(url: string) {
    return this.http.delete(url);
  }

}
