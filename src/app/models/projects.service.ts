import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  findArticles(): Observable<any> {
    //let headers = new HttpHeaders();
    //this.createAuthorizationHeader(headers);

    return this.http.get('/api/projects');
  }

  findById(id: number): Observable<any> {
    return this.http.get('/api/projects/project/'+id);
  }
}