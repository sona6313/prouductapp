import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  constructor(private http:HttpClient) { }
  
  adduser(data:any){
     return this.http.post<any>('http://localhost:3000/productlist' , data)
   }
   
   getuser(){
    return this.http.get<any>('http://localhost:3000/productlist/');
   }
   
   deleteuser(_id:number){
    return this.http.delete<any>('http://localhost:3000/productlist/${_id}');
   }

}
