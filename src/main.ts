import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // On importe le bon nom "AppComponent"

bootstrapApplication(AppComponent, appConfig) // On lance "AppComponent"
  .catch((err) => console.error(err));