import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Actor } from '../models/actor';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ActorService{
    private getActorListUrl = '/backend/actors';
    private getActorUrl = '/backend/actor/';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ){}

    getActorList (page_num : string): Observable<Actor[]>{
        return this.http.get<Actor[]>(this.getActorListUrl + '/' + page_num)
            .pipe(
                catchError(this.handleError<Actor[]>('getActorList', []))
            );
    }

    getActor (actor_id : string): Observable<Actor>{
        return this.http.get<Actor>(this.getActorUrl + actor_id)
            .pipe(
                catchError(this.handleError<Actor>('getActor', null))
            );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
  
            console.error(error);
            return of(result as T);

        };
    
        
    }


}