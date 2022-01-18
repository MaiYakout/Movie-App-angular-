import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Results, MoviesModel } from '../../models/movies.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  moviesDat: Results[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;
  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      this.genreId = params['genreId'];
      // console.log(params);
    });
    if (this.genreId) {
      // console.log(this.genreId);
      this.getMoviesByGenres(this.genreId, 1);
    } else {
      this.getPagedMovies(1);
    }
  }
  getPagedMovies(page: number, searchKeyWord?: string) {
    this.movieService.searchMovies(page, searchKeyWord).subscribe((movies) => {
      this.moviesDat = movies;
      // console.log(movies);
    });
  }
  getMoviesByGenres(genreId: string, page: number) {
    this.movieService.getMoviesByGenres(genreId, page).subscribe((movies) => {
      this.moviesDat = movies;
      // console.log(movies);
    });
  }
  paginate(event: any) {
    // console.log(event);
    const ev = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenres(this.genreId, ev);
    } else {
      if (this.searchValue) {
        console.log('search');
        this.getPagedMovies(ev, this.searchValue);
      } else {
        this.getPagedMovies(ev);
      }
    }
  }
  searchChange() {
    if (this.searchValue) {
      this.getPagedMovies(1, this.searchValue);
    } else {
      this.getPagedMovies(1);
    }
  }
}
