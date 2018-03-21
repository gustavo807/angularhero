import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PokeService } from '../poke.service';
import 'rxjs/operator/map';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  providers: [
    { 
      provide: DataService, 
      useFactory: () => {
        return new DataService(true); // Factory Providers: Passed values to constructor.
      }
    },
    PokeService
  ]
})
export class PokemonsComponent implements OnInit {

  pokemons : Pokemon [] = [];
  items: Array<any>;

  

  constructor(
    private pokemonService : PokeService
  ) {
    console.log('constructor ran...');
   }

  ngOnInit() {
    
    
  }

  getPokemons(){
    this.pokemonService.getPokemons(20,0)
    .map(res => {
      return  res.json().results.map(item => {
        var split = item.url.split("/");
        var slice = split[split.length -2];
        var href = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${slice}.png`;

        return {
          name: item.name,
          image: href
        };
      })
    })
      .subscribe(pokemons => {
        this.pokemons = pokemons;
        console.log(pokemons);
      });
  }

}

export interface Pokemon{
  name: string,
  image: string,
}