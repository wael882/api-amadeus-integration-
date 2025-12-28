import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmadeusService {

  // URL du serveur proxy Node.js qui communique avec l'API Amadeus
  private apiUrl = 'http://localhost:3000/api/flights';

  constructor(private http: HttpClient) { }

  /**
   * Recherche des vols disponibles entre deux aéroports
   * @param origin Code IATA de l'aéroport de départ (ex: 'CDG' pour Paris)
   * @param destination Code IATA de l'aéroport d'arrivée (ex: 'JFK' pour New York)
   * @param date Date de départ au format 'YYYY-MM-DD'
   * @returns Observable contenant les données de vol retournées par l'API Amadeus
   */
  searchFlights(origin: string, destination: string, date: string): Observable<any> {
    // Construction des paramètres de requête HTTP
    const params = new HttpParams()
      .set('originLocationCode', origin)
      .set('destinationLocationCode', destination)
      .set('departureDate', date)
      .set('adults', '1');

    return this.http.get(this.apiUrl, { params });
  }
}