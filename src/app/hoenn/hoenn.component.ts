import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-hoenn',
  imports: [],
  templateUrl: './hoenn.component.html',
  styleUrl: './hoenn.component.css'
})
export class HoennComponent {

  service= inject(PokemonService);

  pokemon= this.service.hoennPokemon;

}
