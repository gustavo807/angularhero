import { Injectable } from '@angular/core';


@Injectable()
export class DataService {
  items: Array<any> = [
    { id: 1, name: 'Pikachu', description: 'This awason pokemon' },
    { id: 2, name: 'Bulbasor', description: 'This bulbasor awason pokemon' },
    { id: 3, name: 'Charmander', description: 'This charmander awason pokemon' }
  ]
  constructor(
    private enabled: boolean
  ) { }

  debug(message: string){
    if(this.enabled){
      console.log(`DEBUG: ${message}`);
    }
  }

  getItems(){
    return this.items;
  }

  

}
