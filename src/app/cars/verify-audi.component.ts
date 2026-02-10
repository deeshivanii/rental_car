import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-verify-audi',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './verify-audi.component.html',
  styleUrl: './verify-audi.component.scss'
})
export class VerifyAudiDetailsComponent implements OnInit {
  themeService = inject(ThemeService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  bookingDetails: any = {};

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.bookingDetails = { ...params };
    });
  }

  onAdd() {
    this.router.navigate(['/success-audi'], {
      queryParams: this.bookingDetails
    });
  }
}
