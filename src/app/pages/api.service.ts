import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../shared/environments/environment';
import { Article } from '../types/article';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  GetArticles(){
    const{appUrl} = environment
return this.http.get<Article[]>(`${appUrl}/posts`)
  }

  // GetPosts(){
  //   const{appUrl} = environment
   
  //   return this.http.get<Post[]>(`${appUrl}/posts${limitFilter}`)
  // }

 
}

