import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root' // Ça rend le service accessible partout
})
export class FlightService {
  // L'adresse du serveur JSON 
  private apiUrl = 'http://localhost:3000/flights';

  // Injection de l'outil HttpClient pour faire des requêtes
  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste
  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiUrl);
  }
}