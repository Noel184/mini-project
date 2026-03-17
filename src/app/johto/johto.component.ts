import { Component ,inject} from '@angular/core';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-johto',
  standalone: true,
  templateUrl: './johto.component.html',
  styleUrl: './johto.component.css'
})
export class JohtoComponent {
  pokemonService = inject(PokemonService);

}
