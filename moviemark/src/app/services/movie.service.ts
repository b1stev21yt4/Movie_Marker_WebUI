import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Movie } from '../models/movie';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MovieService{
    private getMovieListUrl = '/backend/movies';
    private getMoviebyActorUrl = '/backend/moviesbyactor/';
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ){}

    getMovieList (page_num : string): Observable<Movie[]>{
        return this.http.get<Movie[]>(this.getMovieListUrl + '/' + page_num)
            .pipe(
                catchError(this.handleError<Movie[]>('getMovieList', []))
            );
    }

    getRelatedMovie (actor_id : string): Observable<Movie[]>{
        return this.http.get<Movie[]>(this.getMoviebyActorUrl + actor_id)
        .pipe(
            catchError(this.handleError<Movie[]>('getRelatedMovie', []))
        );        
    }
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
  
            console.error(error);
            return of(result as T);

        };
    }


}