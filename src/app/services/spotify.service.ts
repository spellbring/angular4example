import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {

  artistas:any [] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";
  url

  constructor( private http:Http ) { }

  getArtistas( termino:string ){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQD7GoxjAcQjzDFz4b2sJVEEW621jj09ig2YL_KYbfNdVQHeoKegkAEu9jBRJI9C5skIuIyfPpj0iSxZc4t20g');
    let query = `?q=${ termino }&type=artist`;

    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } ).map( res => {
                  //console.log( res.json().artists.item );
                  this.artistas = res.json().artists.items;
                  return this.artistas;
              });


  }

  getArtista( id:string ){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQD7GoxjAcQjzDFz4b2sJVEEW621jj09ig2YL_KYbfNdVQHeoKegkAEu9jBRJI9C5skIuIyfPpj0iSxZc4t20g');
    let query = `/${ id }`;

    let url = this.urlArtista + query;

    return this.http.get( url, { headers } ).map( res => {

                  return res.json();
                  //this.artistas = res.json().artists.items;
                  //return this.artistas;
              });


  }

  getTop( id:string ){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQBHHxvVr5RBbJ_3xquatgxGJEaZ477tLegj4ohdKo_HhlpmkaK8i32gGh5_7yL08pi8bp-O5hnSQSrjSpZpnQ');
    let query = `/${ id }/top-tracks?country=US`;

    let url = this.urlArtista + query;

    return this.http.get( url, { headers } ).map( res => {

                  return res.json().tracks;
                  //this.artistas = res.json().artists.items;
                  //return this.artistas;
              });


  }

}
