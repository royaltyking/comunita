import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MasterDataService {

  constructor(private http: HttpClient) { }

  findGenders(): Observable<any> {
    return this.http.get('/api/master-data/genders');
  }

  findDocumentsTypes(): Observable<any> {
    return this.http.get('/api/master-data/documents-types');
  }

  findStates(): Observable<any> {
    return this.http.get('/api/master-data/states/CO');
  }

  findCities(id_state: number): Observable<any> {
    return this.http.get('/api/master-data/cities/'+String(id_state));
  }
}