import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeaderComponent {
  @Output() scrollToSection = new EventEmitter<string>();

  scrollTo(section: string) {
    this.scrollToSection.emit(section);
  }
}
