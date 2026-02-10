import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-bmw-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bmw-card.component.html',
  styleUrl: './bmw-card.component.scss'
})
export class BmwCardComponent {
  public themeService = inject(ThemeService);
}
