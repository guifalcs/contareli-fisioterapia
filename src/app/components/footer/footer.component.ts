import { Component, ChangeDetectionStrategy } from '@angular/core';
import { InfoModalComponent } from '../info-modal/info-modal.component';

type ModalSection = 'location' | 'contact' | 'schedule';

interface FooterModalContent {
  title: string;
  description: string;
  items: string[];
  footerNote?: string;
}

@Component({
  selector: 'app-footer',
  imports: [InfoModalComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FooterComponent {
  protected isModalOpen = false;
  protected modalTitle = '';
  protected modalDescription = '';
  protected modalItems: string[] = [];
  protected modalFooterNote = '';

  private readonly modalContent: Record<ModalSection, FooterModalContent> = {
    location: {
      title: 'Endereço da Clínica',
      description: 'Av. Castelo Branco, 896 - Sala 606',
      items: ['Horto, Ipatinga - MG', 'CEP: 35160-294'],
    },
    contact: {
      title: 'Contato',
      description: 'Fale com a nossa equipe:',
      items: [
        'Telefone: (31) 99931-6529',
        'Email: contarelicentrodefisioterapia@gmail.com',
      ],
    },
    schedule: {
      title: 'Horários de Atendimento',
      description: 'Atendimento com horário agendado para melhor experiência.',
      items: ['Segunda a Sexta: 07:00 - 19:00', 'Sábado: 07:00 - 13:00'],
      footerNote: '*Mediante agendamento prévio',
    },
  };

  protected showLocation() {
    this.openModal('location');
  }

  protected showContactInfo() {
    this.openModal('contact');
  }

  protected showSchedule() {
    this.openModal('schedule');
  }

  protected closeModal() {
    this.isModalOpen = false;
  }

  private openModal(section: ModalSection) {
    const content = this.modalContent[section];
    this.modalTitle = content.title;
    this.modalDescription = content.description;
    this.modalItems = content.items;
    this.modalFooterNote = content.footerNote ?? '';
    this.isModalOpen = true;
  }
}
