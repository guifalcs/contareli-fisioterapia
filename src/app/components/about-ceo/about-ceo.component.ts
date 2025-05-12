import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-ceo',
  templateUrl: './about-ceo.component.html',
  styleUrl: './about-ceo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AboutCeoComponent {}
