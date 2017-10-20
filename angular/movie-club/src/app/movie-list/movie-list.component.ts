import { Component, OnInit, Injectable } from '@angular/core';

import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';

@Injectable()
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private MovieService: MovieService) { }

  ngOnInit() {
    this.MovieService.getMovies().subscribe(
      data => this.movies = data,
      err => console.log(err)
    )
  }



}
