import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { MoviesModel, Results } from '../models/movies.model';
import { of } from 'rxjs';
import { Videos } from '../models/videos.model';
import { Photos } from '../models/photos.model';
import { Credits } from '../models/credits.model';
import { GenresList } from '../models/genres.model';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'cdb656cf696356c153abd8357209034c';

  getMovies(type: string, count: number = 12) {
    return this.http
      .get<MoviesModel>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }
  getMovieByid(movie_id: string) {
    return this.http.get<Results>(
      `${this.baseUrl}/movie/${movie_id}?api_key=${this.apiKey}`
    );
  }
  getVideosOfMovie(movie_id: string) {
    return this.http
      .get<Videos>(
        `${this.baseUrl}/movie/${movie_id}/videos?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  getPhotosOfMovie(movie_id: string) {
    return this.http.get<Photos>(
      `${this.baseUrl}/movie/${movie_id}/images?api_key=${this.apiKey}`
    );
  }
  getCreditsOfMovie(movie_id: string) {
    return this.http.get<Credits>(
      `${this.baseUrl}/movie/${movie_id}/credits?api_key=${this.apiKey}`
    );
  }
  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.http
      .get<MoviesModel>(
        `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  getSimilarMovies(movie_id: string) {
    return this.http.get<MoviesModel>(
      `${this.baseUrl}/movie/${movie_id}/similar?api_key=${this.apiKey}`
    );
  }
  GetMoviesGenres() {
    return this.http
      .get<GenresList>(
        `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }
  getMoviesByGenres(genreId: string, pageNu: number) {
    return this.http
      .get<MoviesModel>(
        `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNu}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
