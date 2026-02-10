import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-book-bmw',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './book-bmw.component.html',
  styleUrl: './book-bmw.component.scss'
})
export class BookBmwComponent implements OnInit {
  public themeService = inject(ThemeService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  selectedCar: string = 'BMW M4 Coupe'; // Default fallback
  selectedCarImage: string = 'images/BMW%20M4%20Coupe.png'; // Default fallback

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['car']) this.selectedCar = params['car'];
      if (params['img']) this.selectedCarImage = params['img'];
    });
  }

  bookingForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    age: ['', [Validators.required, Validators.min(18)]],
    licenseNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
    duration: ['20 minutes', Validators.required],
    timeSlot: ['9:00 AM', Validators.required]
  });

  durations = ['20 minutes 15000 INR', '30 minutes  25000 INR', '1 Hour 75000 INR'];
  timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log('BMW Booking submitted:', this.bookingForm.value);
      const formValue = this.bookingForm.value;
      this.router.navigate(['/verify-bmw'], {
        queryParams: {
          carName: this.selectedCar,
          name: formValue.name,
          age: formValue.age,
          licenseNumber: formValue.licenseNumber,
          duration: formValue.duration,
          timeSlot: formValue.timeSlot
        }
      });
    } else {
      this.bookingForm.markAllAsTouched();
    }
  }
}
