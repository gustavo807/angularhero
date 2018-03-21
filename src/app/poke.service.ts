import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class PokeService {

  constructor(
    private http: Http
  ) { }

  getPokemons(limit: number, offset: number){
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    )
    //.map(res => res.json());
  }

}
