import { Component, OnInit } from '@angular/core';
import { MoviesModel, Results } from 'src/app/models/movies.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Results[] = [];
  upcomingMovies: Results[] = [];
  topRatedMovies: Results[] = [];
  constructor(private movieservice: MoviesService) {}

  ngOnInit(): void {
    /* Popular Movies */
    this.movieservice.getMovies('popular').subscribe((data) => {
      this.popularMovies = data;
      // console.log(this.popularMovies);
    });
    /* Upcoming Movies */
    this.movieservice.getMovies('upcoming').subscribe((data) => {
      this.upcomingMovies = data;
    });
    /* TopRated */
    this.movieservice.getMovies('top_rated').subscribe((data) => {
      this.topRatedMovies = data;
    });
  }
}
