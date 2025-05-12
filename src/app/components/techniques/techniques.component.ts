import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-techniques',
  templateUrl: './techniques.component.html',
  styleUrl: './techniques.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TechniquesComponent {
  activeIndex: number = -1;

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}
