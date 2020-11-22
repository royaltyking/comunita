import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  findArticles(): Observable<any> {
    //let headers = new HttpHeaders();
    //this.createAuthorizationHeader(headers);

    return this.http.get('/api/articles');
  }
}