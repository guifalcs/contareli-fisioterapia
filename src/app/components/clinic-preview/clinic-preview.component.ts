import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-clinic-preview',
  templateUrl: './clinic-preview.component.html',
  styleUrl: './clinic-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class ClinicPreviewComponent {}
