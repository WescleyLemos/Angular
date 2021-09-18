import { PokeapiService } from './../../services/pokeapi.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  nameFilter = '';
  selectedPkm = { name: '', number: 0 };
  get pokemonList() {
    return this.pokeapi.pokeList.filter((pokemon) => {
      return (
        pokemon.name
          .toLocaleLowerCase()
          .indexOf(this.nameFilter.toLocaleLowerCase()) !== -1
      );
    });
  }

  get pkmSprite() {
    const number = ('000' + this.selectedPkm.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }

  constructor(private pokeapi: PokeapiService) {}

  ngOnInit(): void {
    this.pokeapi.listAll();
  }

  selectPokemon(pkm: any) {
    this.selectedPkm = pkm;
    console.log(this.selectedPkm.number);
  }
}
