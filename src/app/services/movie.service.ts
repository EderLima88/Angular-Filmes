import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MovieDetail } from '../interfaces/movie-detail';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);

  constructor() { }

getMovies(): Observable<MovieDetail> {
  return this.http.get<MovieDetail>(`${apiUrl}?api_key=${apiKey}`);
}

}
