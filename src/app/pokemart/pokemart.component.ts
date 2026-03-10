import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemart',
  imports: [],
  templateUrl: './pokemart.component.html',
  styleUrl: './pokemart.component.css'
})
export class PokemartComponent {

  service= inject(PokemonService);

  items= this.service.item;
  cart= this.service.cart;
  total= this.service.totalPrice;

  add(item:any){
    this.service.addToCart(item);
  }

}
