import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss'],
})
export class VideoEmbedComponent implements OnInit {
  @Input() key: string = '';
  @Input() site: string = '';
  videoUrl: SafeResourceUrl = '';
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videoUrl = this.getLink('https://www.youtube.com/embed/' + this.key);
  }
  getLink(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
