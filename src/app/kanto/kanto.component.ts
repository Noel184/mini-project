import { Component,inject,Inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-kanto',
  standalone: true,
  templateUrl: './kanto.component.html',
  styleUrl: './kanto.component.css'
})
export class KantoComponent {
  pokemonService = inject(PokemonService);


}
