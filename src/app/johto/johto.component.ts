import { Component,inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-johto',
  imports: [],
  templateUrl: './johto.component.html',
  styleUrl: './johto.component.css'
})
export class JohtoComponent {

  service= inject(PokemonService);

  pokemon= this.service.johtoPokemon;

}
