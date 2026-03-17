import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-pokemart',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './pokemart.component.html',
  styleUrl: './pokemart.component.css'
})
export class PokemartComponent {
  pokemonService = inject(PokemonService);
}