import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../models/articles.service';

@Component({
  selector: 'articles',
  templateUrl: '../views/articleE.html',
  styleUrls: ['../views/articleE.scss']
})
export class ArticleEComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private article_service: ArticleService
  ) {}

  d = [];
  id = null;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    
    //consultamos entonces, el articulo
    this.article_service.findById(this.id).subscribe(
      data => {
        this.d = data;
        console.log('article', this.d);
      }
    );
  }
  
}
