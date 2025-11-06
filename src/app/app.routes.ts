import { Routes } from '@angular/router';
import { ShoppingComponent } from './components/shopping/shopping';
import { PaymentGateway } from './components/payment-gateway/payment-gateway';

export const routes: Routes = [
  { path: '', component: ShoppingComponent },
  { path: 'payment-gateway', component: PaymentGateway },
  { path: '**', redirectTo: '' }
];
