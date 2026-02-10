import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-success-audi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-audi.component.html',
  styleUrl: './success-audi.component.scss'
})
export class SuccessAudiComponent implements OnInit {
  themeService = inject(ThemeService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  details: any = {};

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.details = params;
    });

     setTimeout(() => {
      this.router.navigate(['/']);
    }, 10000);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
