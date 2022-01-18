import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Results } from '../../models/movies.model';
@Component({
  selector: 'app-movie-items',
  templateUrl: './movie-items.component.html',
  styleUrls: ['./movie-items.component.scss'],
})
export class MovieItemsComponent implements OnInit {
  @Input() movieItem!: Results;
  imageSizes = IMAGES_SIZES;
  constructor() {}

  ngOnInit(): void {}
}
