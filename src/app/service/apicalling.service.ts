import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApicallingService {

  constructor(private http:HttpClient) { }

  apicall(){
    return this.http.get('https://raw.githubusercontent.com/shivika24/tourism-project/master/db.json')
  }
  
}
