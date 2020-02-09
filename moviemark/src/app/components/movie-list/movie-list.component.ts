import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[];



  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.getMovieList();
  }

  getMovieList() {
    const pageNum = this.route.snapshot.paramMap.get('page_num');
    console.log(typeof pageNum);
    this.movieService.getMovieList(pageNum).subscribe(movies => this.movieList = movies);
  }
}
