import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NomDuComposantComponent } from './nom-du-composant/nom-du-composant.component';
import { WeatherComponent } from './weather/weather.component';

const imports = [CommonModule, RouterOutlet, NomDuComposantComponent,WeatherComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: imports,
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'TestAppAngular';
}
