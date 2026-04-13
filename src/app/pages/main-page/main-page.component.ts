import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { TreatmentsComponent } from '../../components/treatments/treatments.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { TechniquesComponent } from '../../components/techniques/techniques.component';
import { LocationComponent } from '../../components/location/location.component';
import { AboutComponent } from '../../components/about/about.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ClinicPreviewComponent } from '../../components/clinic-preview/clinic-preview.component';
import { AboutCeoComponent } from '../../components/about-ceo/about-ceo.component';

@Component({
  selector: 'app-main-page',
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
    ClinicPreviewComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const AOS = (await import('aos')).default;

    AOS.init({
      duration: 650,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      anchorPlacement: 'top-bottom',
    });
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
