import { Component, OnInit } from '@angular/core';
import { Actor } from '../../models/actor';
import { Movie } from '../../models/movie';
import { ActorService } from '../../services/actor.service';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit {
  actor: Actor = new Actor();
  movieList: Movie[];

  constructor(
    private actorService: ActorService,
    private movieService: MovieService,
    private route: ActivatedRoute,
  
  ) { }

  ngOnInit() {
    this.getActor();
    this.getRelatedMovies();
  }
  getActor() {
    const actorId = this.route.snapshot.paramMap.get('actor_id');
    // console.log(typeof pageNum);
    this.actorService.getActor(actorId).subscribe(actor => this.actor = actor);
  }
  getRelatedMovies(){
    const actorId = this.route.snapshot.paramMap.get('actor_id');
    this.movieService.getRelatedMovie(actorId).subscribe(movies => this.movieList = movies);
  }
}
