import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-features.component.html',
  styleUrl: './card-features.component.scss'
})
export class CardFeaturesComponent {

  selectedCard: number = 1

  onSelectCard(cardNumber: number) {
    this.selectedCard = cardNumber
  }

}
