import { Routes } from '@angular/router';
import { CarChoiceComponent } from './cars/car-choice.component';
import { BmwSelectionComponent } from './cars/bmw-selection.component';
import { AudiSelectionComponent } from './cars/audi-selection.component';
import { BookAudiComponent } from './cars/book-audi.component';
import { BookBmwComponent } from './cars/book-bmw.component';
import { VerifyAudiDetailsComponent } from './cars/verify-audi.component';
import { VerifyBmwDetailsComponent } from './cars/verify-bmw.component';
import { SuccessAudiComponent } from './cars/success-audi.component';
import { SuccessBmwComponent } from './cars/success-bmw.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';

export const routes: Routes = [
	{ path: '', component: CarChoiceComponent },
	{ path: 'bmw', component: BmwSelectionComponent },
	{ path: 'audi', component: AudiSelectionComponent },
	{ path: 'book-audi', component: BookAudiComponent },
	{ path: 'book-bmw', component: BookBmwComponent },
	{ path: 'verify-audi', component: VerifyAudiDetailsComponent },
	{ path: 'verify-bmw', component: VerifyBmwDetailsComponent },
	{ path: 'success-audi', component: SuccessAudiComponent },
	{ path: 'success-bmw', component: SuccessBmwComponent },
	{
		path: 'auth',
		children: [
			{ path: 'login', component: LoginComponent },
			{ path: 'registration', component: RegistrationComponent }
		]
	},
	{ path: '**', redirectTo: '' }
];
