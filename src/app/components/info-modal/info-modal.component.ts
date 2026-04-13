import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-info-modal',
  imports: [NgIf, NgFor],
  templateUrl: './info-modal.component.html',
  styleUrl: './info-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class InfoModalComponent {
  @Input() open = false;
  @Input() title = '';
  @Input() description = '';
  @Input() items: string[] = [];
  @Input() footerNote = '';

  @Output() closed = new EventEmitter<void>();

  protected closeModal() {
    this.closed.emit();
  }

  protected onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscapeKey() {
    if (this.open) {
      this.closeModal();
    }
  }
}
