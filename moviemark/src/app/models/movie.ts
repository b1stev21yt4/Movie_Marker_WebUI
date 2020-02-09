export class Movie {
    movieid: string;
    title: string;
    year: number;
    length: number;
    genres: string;
    rate: number;
    poster: string;
    plot: string;
    trailer: string;

    constructor(
        movieid: string = null,
        title: string = null,
        year: number = null,
        length: number = null,
        genres: string = null,
        rate: number = null,
        poster: string = null,
        plot: string = null,
        trailer: string = null

    ) { }
}