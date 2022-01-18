import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { GenresComponent } from './pages/genres/genres.component';
import { SliderComponent } from './component/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsBannerComponent } from './component/items-banner/items-banner.component';
import { MovieItemsComponent } from './component/movie-items/movie-items.component';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';

import { MovieComponent } from './pages/movie/movie.component';
import { VideoEmbedComponent } from './component/video-embed/video-embed.component';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvshowsComponent,
    GenresComponent,
    SliderComponent,
    ItemsBannerComponent,
    MovieItemsComponent,
    MovieComponent,
    VideoEmbedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
