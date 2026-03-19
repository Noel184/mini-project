import { Injectable,signal,computed   } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

kantoPokemons = signal([
  {name:'Charizard' , type: 'Fire/Flying', heldItem:'Charcoal', description:'The Flame Pokemon', image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/006.png' },
  {name:'Blastoise' , type: 'Water', heldItem:'Mystic Water', description:'The Shellfish Pokemon', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/009.png' },
  {name:'Mew' , type: 'Psychic', heldItem:'Life Orb', description:'The New Species Pokemon', image:'https://upload.wikimedia.org/wikipedia/en/4/4b/Pok%C3%A9mon_Mew_art.png' },
  {name:'Jolteon' , type: 'Electric', heldItem:'Magnet', description:'The Lightning Pokemon', image:'https://archives.bulbagarden.net/media/upload/thumb/e/e3/0135Jolteon.png/800px-0135Jolteon.png' },
  {name:'Arcanine' , type: 'Fire', heldItem:'Sitrus Berry', description:'The Legendary Pokemon', image:'https://archives.bulbagarden.net/media/upload/thumb/4/42/0059Arcanine.png/250px-0059Arcanine.png' },
  {name:'Venasaur' , type: 'Grass/Poison', heldItem:'Miracle Seed', description:'The Seed Pokemon', image:'https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/640px-0003Venusaur.png' },

  
]);

johtoPokemons = signal ([
  {name:'Typhlosion' , type: 'Fire', heldItem:'Charcoal', description:'The Volcano pokemon', image:'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Typhlosion.png/250px-Typhlosion.png' },
  {name:'Feraligatr' , type: 'Water', heldItem:'Mystic Water', description:'The Big Jaw Pokemon', image:'https://archives.bulbagarden.net/media/upload/thumb/2/29/0160Feraligatr.png/250px-0160Feraligatr.png' },
  {name:'Rhydon' , type: 'Ground/Rock', heldItem:'Eviolite', description:'The Drill Pokemon', image:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/112.png' },
  {name:'Suicune' , type: 'Water', heldItem:'Choice Band', description:'The Aurora Pokemon', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qdJpKrrljuqqzISTcQsrn0exvZ7KhiRAfw&s' },
  {name:'Entei' , type: 'Fire', heldItem:'Choice Band', description:'The Volcano Pokemon', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclPIIfOTcPREjhJj69OYLKkzHWw3mBok8cg&s' },
  {name:'Lugia' , type: 'Psychic/Flying', heldItem:'Leftovers', description:'The Diving Pokemon' },


  
]);
hoennPokemons = signal([
  {name:'Sceptile' , type: 'Grass', heldItem:'Miracle Seed', description:'The Forest Pokemon' },
  {name:'Blaziken' , type: 'Fire/Fighting', heldItem:'Charcoal', description:'The Blaze Pokemon' },
  {name:'Swampert' , type: 'Water/Ground', heldItem:'Leftovers', description:'The Mud Fish Pokemon' },
  {name:'Kyogre' , type: 'Water', heldItem:'Blue Orb', description:'The Sea Basin Pokemon' },
  {name:'Hariyama' , type: 'Fighting', heldItem:'Punching Glove', description:'The Arm Thrust  Pokemon' },
  {name:'Rayquaza' , type: 'Dragon/Flying', heldItem:'Dragon Fang', description:'The Sky High pokemon' },

]);

martItems = signal([
  {id:1, name:'Poke Ball' , price: 200},
  {id:2, name:'Great Ball' , price: 600},
  {id:3, name:'Ultra Ball' , price:1200},
  {id:4, name:'Potion' , price:300},
  {id:5, name:'Super Potion' , price:700},
  {id:6, name:'Hyper Potion' , price:1500},
  {id:7, name:'Revive' , price:2000},
  {id:8, name:'Antidote' , price:100},
  {id:9, name:'Paralyze Heal' , price:200},
  {id:10, name:'Escape Rope' , price:550},

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


