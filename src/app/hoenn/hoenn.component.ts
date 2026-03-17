import { Component,inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-hoenn',
  standalone: true,
  templateUrl: './hoenn.component.html',
  styleUrl: './hoenn.component.css'
})
export class HoennComponent {
  pokemonService = inject(PokemonService);
}
