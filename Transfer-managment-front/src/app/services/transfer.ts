import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer, TransferStatus } from '../models/transfer.model';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private apiUrl = 'http://localhost:8081/api/v1/transfers';

  constructor(private http: HttpClient) {}

  // Get all transfers
  getTransfers(): Observable<Transfer[]> {
    console.log(`[TransferService] Calling GET ${this.apiUrl}`);
    return this.http.get<Transfer[]>(this.apiUrl);
  }

  // Create a transfer
  createTransfer(transfer: Transfer): Observable<Transfer> {
    console.log('[TransferService] Calling POST', this.apiUrl, transfer);
    return this.http.post<Transfer>(this.apiUrl, transfer);
  }

  // Update status
  updateStatus(id: number, status: TransferStatus): Observable<Transfer> {
    console.log(`[TransferService] Calling PATCH ${this.apiUrl}/${id}/status`, { status });
    return this.http.patch<Transfer>(`${this.apiUrl}/${id}/status`, { status });
  }
}
