import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-techniques',
  templateUrl: './techniques.component.html',
  styleUrl: './techniques.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AccordionModule],
})
export class TechniquesComponent {}
