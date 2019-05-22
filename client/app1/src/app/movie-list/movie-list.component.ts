import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = [];
  constructor(private router: Router,
    private movieservice: MovieService) {
      this.refreshMovieList();
  }

    refreshMovieList(){
      this.movieservice.getMovies().subscribe(response =>{
        const result = response.json();
        console.log(result);
        this.movies = result.data;
      });
    }
  ngOnInit() {
  }

}
