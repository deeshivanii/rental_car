import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-bmw-selection',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bmw-selection.component.html',
  styleUrl: './bmw-selection.component.scss'
})
export class BmwSelectionComponent {
  themeService = inject(ThemeService);
}
