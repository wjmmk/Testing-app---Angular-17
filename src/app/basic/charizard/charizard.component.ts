import { Component, OnInit } from '@angular/core';
import { CharizardService } from './charizard.service';
import { Pokemon } from '../interfaces';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-charizard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './charizard.component.html',
  styleUrl: './charizard.component.scss'
})
export class CharizardComponent implements OnInit {
   public charizard?: Pokemon;

   constructor( private charizardService: CharizardService) {}

   ngOnInit(): void {
       this.charizardService.getPokemon(6)
         .subscribe( async (pokemon) => {
          this.charizard = pokemon
          console.log(pokemon)
         })
   }
}
