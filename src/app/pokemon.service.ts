import { Injectable,signal,computed   } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

kantoPokemons = signal([
  {name:'Charizard' , type: 'Fire/Flying', heldItem:'Charcoal', description:'The Flame Pokemon' },
  {name:'Blastoise' , type: 'Water', heldItem:'Mystic Water', description:'The Mantis pokemon' },
  {name:'Mew' , type: 'Psychic', heldItem:'Life Orb', description:'The New Species Pokemon' },
  {name:'Jolteon' , type: 'Electric', heldItem:'Magnet', description:'The Lightning Pokemon' },
  {name:'Arcanine' , type: 'Fire', heldItem:'Sitrus Berry', description:'The Legendary Pokemon' },
  {name:'Venasaur' , type: 'Grass/Poison', heldItem:'Miracle Seed', description:'The Seed Pokemon' },

  
]);

johtoPokemons = signal ([
  {name:'Typhlosion' , type: 'Fire', heldItem:'Charcoal', description:'The Volcano pokemon' },
  {name:'Feraligatr' , type: 'Water', heldItem:'Mystic Water', description:'The Big Jaw Pokemon' },
  {name:'Rhydon' , type: 'Ground/Rock', heldItem:'Eviolite', description:'The Drill Pokemon' },
  {name:'Suicune' , type: 'Water', heldItem:'Choice Band', description:'The Aurora Pokemon' },
  {name:'Entei' , type: 'Fire', heldItem:'Choice Band', description:'The Volcano Pokemon' },
  {name:'Lugia' , type: 'Psychic/Flying', heldItem:'Leftovers', description:'The Diving Pokemon' },


  
]);
hoennPokemons = signal([
  {name:'Sceptile' , type: 'Grass', heldItem:'Miracle Seed', description:'The Forest Pokemon' },
  {name:'Blaziken' , type: 'Fire/Fighting', heldItem:'Attck weight', description:'The Blaze Pokemon' },
  {name:'Swampert' , type: 'Water/Ground', heldItem:'Leftovers', description:'The Mud Fish Pokemon' },
  {name:'Kyogre' , type: 'Water', heldItem:'Blue Orb', description:'The Sea Basin Pokemon' },
  {name:'Hariyama' , type: 'Fighting', heldItem:'Assault Vest', description:'The Arm Thrust  Pokemon' },
  {name:'Rayquaza' , type: 'Dragon/Flying', heldItem:'Dragon Fang', description:'The Sky High pokemon' },

]);

martItems = signal([
  {id:1, name:'Pokeball' , price: 200},
  {id:2, name:'Greatball' , price:400},
  {id:3, name:'Ultraball' , price:750},
  {id:4, name:'Potion' , price:200},
  {id:5, name:'Great Potion' , price:600},
  {id:6, name:'Full Restore' , price:2000},
  {id:7, name:'Escape Rope' , price:750},
  {id:8, name:'Pokedoll' , price:1050},
  {id:9, name:'Quickball' , price:750},
  {id:10, name:'Duskball' , price:70},

]);
 private cartItems = signal<any[]>([]);
  cart = this.cartItems.asReadonly();

  totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price, 0)
  );

  addToCart(item: any) {
    this.cartItems.update(current => [...current, item]);
  }

  clearCart() {
    this.cartItems.set([]);
  }
}


