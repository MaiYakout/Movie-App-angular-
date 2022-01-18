import { Component, Input, OnInit } from '@angular/core';
import { Results } from '../../models/movies.model';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss'],
})
export class ItemsBannerComponent implements OnInit {
  @Input() items: Results[] = [];
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
