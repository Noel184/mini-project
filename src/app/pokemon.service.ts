import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  kantoPokemon = signal([
    {name:'Charizard', type: 'Fire/Flying', item:'Charcoal', description:'The Flame Pokemon' },
    {name:'Arcanine', type: 'Fire', item:'Leftovers', description:'The Legendary Pokemon' },
    {name:'Gyarados', type: 'Water/Flying', item:'Mystic Water', description:'The Atrocious Pokemon' },
    {name:'Jolteon', type: 'Electric', item:'Magnet', description:'The Lightning Pokemon' },
    {name:'Dragonite', type: 'Dragon/Flying', item:'Quick Claw', description:'The Dragon Pokemon' },
    {name:'Mew', type: 'Psychic', item:'Lum Berry', description:'The New Species Pokemon' },
  ]);

  johtoPokemon = signal([
    {name:'Typhlosion', type: 'Fire', item:'Charcoal', description:'The Volcano Pokemon' },
    {name:'Feraligatr', type: 'Water', item:'Mystic Water', description:'The Big Jaw Pokemon' },
    {name:'Crobat', type: 'Poison/Flying', item:'Black Sludge', description:'The Bat Pokemon' },
    {name:'Gengar', type: 'Poison/Ghost', item:'Spell Tag', description:'The Shadow Pokemon' },
    {name:'Scizor', type: 'Bug/Steel', item:'Life Orb', description:'The Pincer Pokemon' },
    {name:'Lugia', type: 'Psychic/Flying', item:'Leftovers', description:'The Diving Pokemon' },
  ]);

  hoennPokemon = signal([
    {name:'Swampert', type: 'Water/Ground', item:'Mystic Water', description:'The Mud Fish Pokemon' },
    {name:'Blaziken', type: 'Fire/Fighting', item:'Charcoal', description:'The Blaze Pokemon' },
    {name:'Sceptile', type: 'Grass', item:'Miracle Seed', description:'The Forest Pokemon' },
    {name:'Metagross', type: 'Steel/Psychic', item:'Choice Band', description:'The Iron Leg Pokemon' },
    {name:'Salamence', type: 'Dragon/Flying', item:'Shell Bell', description:'The Dragon Pokemon' },
    {name:'Rayquaza', type: 'Dragon/Flying', item:'Dragon Fang', description:'The Sky High Pokemon' },
  ]);

  item = signal([
    {name:'Poke Ball', price: 200},
    {name:'Great Ball', price: 600},
    {name:'Ultra Ball', price: 1200},
    {name:'Potion', price: 300},
    {name:'Super Potion', price: 700},
    {name:'Hyper Potion', price: 1500},
    {name:'Revive', price: 2000},
    {name:'Antidote', price: 100},
    {name:'Paralyze Heal', price: 200},
    {name:'Escape Rope', price: 550},
  ]);

  private cartItems= signal<any[]>([]);
  cart= this.cartItems.asReadonly();

  addToCart(product:any){
    this.cartItems.update(current => [...current, product]);
  }

  totalPrice= computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price, 0));

  clearCart(){
    this.cartItems.set([]);
  }

}
