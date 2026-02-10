import { Component, ElementRef, ViewChild, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AudiCardComponent } from './audi-card.component';
import { BmwCardComponent } from './bmw-card.component';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-car-choice',
  standalone: true,
  imports: [CommonModule, BmwCardComponent, AudiCardComponent],
  templateUrl: './car-choice.component.html',
  styleUrl: './car-choice.component.scss'
})
export class CarChoiceComponent {
  selectedBrand = signal<'bmw' | 'audi' | null>(null);
  themeService = inject(ThemeService);

  @ViewChild('bmwRadio') bmwRadio!: ElementRef<HTMLDivElement>;
  @ViewChild('audiRadio') audiRadio!: ElementRef<HTMLDivElement>;

  constructor(private router: Router) {}

  select(brand: 'bmw' | 'audi') {
    this.selectedBrand.set(brand);
    this.router.navigate([brand]);
  }

  onKeydown(event: KeyboardEvent, brand: 'bmw' | 'audi') {
    const key = event.key;
    if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      this.select(brand);
      return;
    }
    if (key === 'ArrowLeft') {
      event.preventDefault();
      this.bmwRadio?.nativeElement.focus();
      return;
    }
    if (key === 'ArrowRight') {
      event.preventDefault();
      this.audiRadio?.nativeElement.focus();
      return;
    }
  }
}
