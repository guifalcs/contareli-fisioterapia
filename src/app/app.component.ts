import { FooterComponent } from './components/footer/footer.component';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { FeaturesComponent } from './components/features/features.component';
import { TechniquesComponent } from './components/techniques/techniques.component';
import { LocationComponent } from './components/location/location.component';
import { AboutComponent } from './components/about/about.component';
import { AboutCeoComponent } from './components/about-ceo/about-ceo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    TreatmentsComponent,
    FeaturesComponent,
    TechniquesComponent,
    LocationComponent,
    AboutComponent,
    FooterComponent,
    AboutCeoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'contareli-fisioterapia';
}
