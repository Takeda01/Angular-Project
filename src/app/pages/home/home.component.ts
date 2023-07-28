
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { Article } from 'src/app/types/article';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  
  constructor(private router: Router, private api: ApiService) {}

  articles: Article[] = []

   ngOnInit(): void {
  this.api.GetArticles().subscribe((articles) => {
this.articles = articles
  })
  }

  Equip(){
this.router.navigate(['/equipment'])
  }

  Sup(){
    this.router.navigate(['/suppliments'])
  }
ArticleImage(a: Article): string{
return `../../../assets/ArticlePhotos/article${Number(a.id)}.jpg`
}
}

