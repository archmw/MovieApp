import { MovieService } from '../movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  title ='';
  year = '';
  directors = '' ;
  writers = '';
  stars = '';
  genre = '';
  short_description = '';
  storyline = '';

  constructor(
    private router: Router,
    private movieService: MovieService) { }

  ngOnInit() { }

  onAdd(){
    this.movieService.addMovies(
      this.title, this.year, this.directors, this.writers, this.stars, this.genre,
      this.short_description, this.storyline
    ).subscribe(response => {
        console.log(response);
        this.router.navigate(['/movie-list']);
      
    });
  }

  onCancel(){
    console.log("On cancel clicked....");
    this.router.navigate(['/movie-list']);
  }

}
