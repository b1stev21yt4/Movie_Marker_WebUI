import { Component, OnInit } from '@angular/core';
import { Actor } from '../../models/actor';
import { ActorService } from '../../services/actor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {
  actorList: Actor[];

  constructor(
    private actorService: ActorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getActorList();
  }
  getActorList() {
    const pageNum = this.route.snapshot.paramMap.get('page_num');
    console.log(typeof pageNum);
    this.actorService.getActorList(pageNum).subscribe(actors => this.actorList = actors);
  }
}
