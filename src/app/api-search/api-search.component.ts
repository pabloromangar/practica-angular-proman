import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para [(ngModel)]
import { GameService } from '../game.service';

@Component({
  standalone: true,
  selector: 'app-api-search',
  templateUrl: './api-search.component.html',
  styleUrls: ['./api-search.component.css'],
  imports: [CommonModule, FormsModule] // Agregar CommonModule y FormsModule
})
export class ApiSearchComponent {
  query: string = '';
  games: any[] = [];
  errorMessage: string = '';
  
  constructor(private gameService: GameService) {}

  searchGames() {
    if (this.query) {
      this.gameService.searchGames(this.query).subscribe(
        (data: any) => {
          this.games = data.results;
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'An error occurred while fetching data.';
          this.games = [];
        }
      );
    }
  }
}
