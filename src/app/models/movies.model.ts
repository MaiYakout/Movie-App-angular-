export class MoviesModel {
  dates!: {
    maximum: string;
    minimum: string;
  };
  page!: number;
  total_pages!: number;
  total_results!: number;
  results!: Results[];
}
export class Results {
  adult!: boolean;
  backdrop_path!: string;
  genre_ids!: [number];
  id!: number;
  original_language!: string;
  original_title!: string;
  overview!: string;
  popularity!: number;
  poster_path!: string;
  release_date!: string;
  title!: string;
  video!: boolean;
  vote_average!: number;
  vote_count!: number;
  revenue!: number;
  runtime!: number;
  status!: string;

  genres!: Genres[];
}
export class Genres {
  name!: string;
  id!: number;
}
