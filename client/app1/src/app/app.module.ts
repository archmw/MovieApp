import { MovieService } from './movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { HttpModule } from '@angular/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'movie-add', component: AddMovieComponent},
      {path: 'movie-list',component: MovieListComponent}
    ])
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
