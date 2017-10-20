import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'; //pour visualiser les données

import { Movie } from '../shared/movie.model';

@Injectable()

export class MovieService {
    constructor(private http: Http){}

    getMovies() {
        return this.http.get('http://localhost:3000/movies')
        .do(data => console.log(data))
        .map(movies => movies.json());
    }

}