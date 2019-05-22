import { Injectable } from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";

@Injectable()
export class MovieService{
    url = 'http://localhost:3000/movies';
    
    constructor(private http: Http){

    }

    getMovies(){
        return this.http.get(this.url);
    }

    addMovies(title: string, year: string, directors: string,
        writers: string, stars: string, genre: string,
        shortDescription: string, storyline: string){
            const body = {
                title: title,
                year: year, 
                directors: directors,
                writers: writers, 
                stars: stars, 
                genre: genre,
                shortDescription: shortDescription, 
                storyline: storyline
            }
            const header = new Headers({'content-Type': 'application/json'});
            const requestOptions = new RequestOptions({ headers: header})
            return this.http.post(this.url, body, requestOptions);
    }
}