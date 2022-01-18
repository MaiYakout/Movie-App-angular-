import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Credits } from 'src/app/models/credits.model';
import { MoviesModel, Results } from 'src/app/models/movies.model';
import { Photos } from 'src/app/models/photos.model';
import { VideoResult, Videos } from 'src/app/models/videos.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: Results | null = null;
  id: string = '';
  videos: VideoResult[] = [];
  imageSizes = IMAGES_SIZES;
  photos: Photos | null = null;
  credits: Credits | null = null;
  similar: Results[] = [];
  responsiveOptions;
  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe((params) => {
      this.id = params['id'];
      this.getMovie(this.id);
      this.getMovieVideos(this.id);
      this.getMoviePhotos(this.id);
      this.getMovieCredits(this.id);
      this.getSimilarMovies(this.id);
    });
  }
  getMovie(id: string) {
    this.movieService.getMovieByid(id).subscribe((data) => {
      this.movie = data;
    });
  }
  getMovieVideos(id: string) {
    this.movieService.getVideosOfMovie(id).subscribe((data) => {
      this.videos = data;
    });
  }
  getMoviePhotos(id: string) {
    this.movieService.getPhotosOfMovie(id).subscribe((data) => {
      this.photos = data;
    });
  }
  getMovieCredits(id: string) {
    this.movieService.getCreditsOfMovie(id).subscribe((data) => {
      this.credits = data;
    });
  }
  getSimilarMovies(id: string) {
    this.movieService.getSimilarMovies(id).subscribe((data) => {
      this.similar = data.results;
      console.log(this.similar);
    });
  }
}
