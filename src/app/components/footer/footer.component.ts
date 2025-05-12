import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FooterComponent {
  protected showLocation() {
    alert(`
      Endereço:

      Av. Castelo Branco, 896 - Sala 606
      Horto, Ipatinga - MG
      CEP: 35160-294
      `);
  }

  protected showContactInfo() {
    alert(`
      Número: (31) 99931-6529

      Email: contarelicentrodefisioterapia@gmail.com
      `);
  }

  protected showSchedule() {
    alert(`

      Horários:

      Segunda à Sexta:
      07:00 - 19:00
      Sábado: 07:00 - 13:00
    
      *Mediante à agendamento prévio
      `);
  }
}
