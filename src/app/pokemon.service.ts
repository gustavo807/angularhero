import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {

  private urlImage : string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  constructor(
    private http : Http
  ) { }

  getPokemons(limit : number, offset : number){
    return this.http.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
      )
      //.toPromise()
      .map(res => res.json().results);

    /*  .then(items => items.map((item, idx) => {
        const array : string[] = item.url.split("/");
        const id : string = array[array.length-2];
        return {
          name : item.name,
          img : this.urlImage + `${id}.png`,
          id
        };
      } ) );
     */ 
  }



}
