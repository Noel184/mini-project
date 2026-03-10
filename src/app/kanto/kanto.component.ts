import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-kanto',
  imports: [],
  templateUrl: './kanto.component.html',
  styleUrl: './kanto.component.css'
})
export class KantoComponent {

  service= inject(PokemonService);

  pokemon= this.service.kantoPokemon;

}
