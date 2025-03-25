import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { FeaturesComponent } from './components/features/features.component';
import { TechniquesComponent } from './components/techniques/techniques.component';
import { MapsComponent } from './components/maps/maps.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, TreatmentsComponent, FeaturesComponent, TechniquesComponent, MapsComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'contareli-fisioterapia';
}
