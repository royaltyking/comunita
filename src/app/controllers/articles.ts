import { Component } from '@angular/core';
import { ArticleService } from '../models/articles.service';
import { Article } from './articles.types';

@Component({
  selector: 'articles',
  templateUrl: '../views/articles.html',
  styleUrls: ['../views/articles.scss']
})
export class ArticlesComponent {
  constructor(public article_mapper: ArticleService) {
    //this.initializeApp();
  }

  d = [];

  ngOnInit() {
    this.article_mapper.findArticles().subscribe(
      data => {
        this.d = data;
      }
    );
  }
  
}
