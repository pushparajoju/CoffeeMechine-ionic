import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:string = "https://api.github.com/users/wycats";
  constructor(private httpClient : HttpClient) {}

  get_data(){
    return this.httpClient.get(this.baseUrl);
  }
}
