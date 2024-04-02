import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputComponent } from '../input/input.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, InputComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() img = 'assets/img/cepImage.svg';  
}
