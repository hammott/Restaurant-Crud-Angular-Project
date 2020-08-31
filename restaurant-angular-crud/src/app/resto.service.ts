import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url="http://localhost:3000/restaurants";
  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }
  saveRestaurantService(data){
    // console.warn("Service", data)
    return this.http.post(this.url,data)
  }
  deleteRestaurantService(id){
    return this.http.delete(`${this.url}/${id}`)
  }
}
