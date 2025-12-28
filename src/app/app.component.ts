import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AmadeusService } from './services/amadeus.service';
import { FlightCardComponent } from './flight-card/flight-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FlightCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'SkyBoard';

  // Liste des vols retournés par l'API Amadeus
  flights: any[] = [];

  constructor(private amadeusService: AmadeusService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    // Recherche de vols lors de l'initialisation du composant
    this.amadeusService.searchFlights('CDG', 'JFK', '2026-11-10').subscribe({
      next: (response: any) => {
        console.log('Réponse complète reçue:', response);
        console.log('Nombre de vols:', response.data?.length);
        // Extraction des données de vol depuis la réponse de l'API
        this.flights = response.data;
        console.log('Flights assignés:', this.flights);
        // Force la détection de changements
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Erreur lors de la récupération des vols :', err);
      }
    });
  }
}