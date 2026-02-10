import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-audi-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './audi-card.component.html',
  styleUrl: './audi-card.component.scss'
})
export class AudiCardComponent {
  public themeService = inject(ThemeService);
}
