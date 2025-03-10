import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'https://api.rawg.io/api/games'; // Cambia esto según la API que estés usando
  private apiKey = 'c2912b4107374fe091691d04dee33633'; // Sustituye 'YOUR_API_KEY' con tu clave de API real

  constructor(private http: HttpClient) {}

  searchGames(query: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&page_size=10&search=${query}`;
    return this.http.get<any>(url);
  }
}
