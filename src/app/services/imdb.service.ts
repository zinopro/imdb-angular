import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Posters } from '../models/imdb-iitems';

@Injectable({
  providedIn: 'root',
})
export class ImdbTabsService {
  private ROOT_URL = 'http://localhost:3000/results';

  constructor(private http: HttpClient) {}

  getPostersFromHttp(): Observable<Posters[]> {
    return this.http.get<Posters[]>(this.ROOT_URL);
  }

  updatePoster(text:string) {
    console.log("Update Request: ", text);
  }
}

