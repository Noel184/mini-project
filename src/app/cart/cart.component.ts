import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  pokemonService = inject(PokemonService);
}