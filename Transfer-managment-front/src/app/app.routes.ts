import { Routes } from '@angular/router';
import { TransferList } from './components/transfer-list/transfer-list';
import { TransferInitiation } from './components/transfer-initiation/transfer-initiation';

export const routes: Routes = [
  { path: '', redirectTo: '/transfers', pathMatch: 'full' },
  { path: 'transfers', component: TransferList },
  { path: 'new-transfer', component: TransferInitiation },
  { path: '**', redirectTo: '/transfers' }
];
