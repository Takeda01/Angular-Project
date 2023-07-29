import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../shared/environments/environment';
import { Article } from '../types/article';
import { Supplement } from '../types/supplement';
import { Equipment } from '../types/equipment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  GetArticles(){
    const{appUrl} = environment
return this.http.get<Article[]>(`${appUrl}/posts`)
  }

   GetSupplements(){
     const{appUrl} = environment
   
    return this.http.get<Supplement[]>(`${appUrl}/themes`)
   }

   GetEquipment(){

    const{appUrl} = environment
   
    return this.http.get<Supplement[]>(`${appUrl}/themes`)

   }

   GetItem(id:string){
    const{appUrl} = environment
   
    return this.http.get<Supplement>(`${appUrl}/themes/${id}`)

   }
 
}

