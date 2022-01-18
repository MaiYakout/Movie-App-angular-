export class Photos {
  id!: number;
  backdrops!: photosSetting[];
  posters!: photosSetting[];
}
export class photosSetting {
  aspect_ratio!: number;
  file_path!: string;
  height!: number;
  iso_639_1!: string;
  vote_average!: number;
  vote_count!: number;
  width!: number;
}
