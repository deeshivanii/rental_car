import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-audi-selection',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './audi-selection.component.html',
  styleUrl: './audi-selection.component.scss'
})
export class AudiSelectionComponent {
  public themeService = inject(ThemeService);

  bookAudi() {
    // Navigate to the booking page for Audi with necessary query parameters
    // You can customize the query parameters as needed
    const queryParams = {
      carName: 'Audi Q8',
      carImage: 'images/Audi Q8 (3).png'
      // Add more parameters if needed, e.g., price, features, etc.
    };
    // Use RouterLink or programmatic navigation to go to the booking page
    // For example, using RouterLink:
    // this.router.navigate(['/book-audi'], { queryParams });
  }
}
