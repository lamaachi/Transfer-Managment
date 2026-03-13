import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { TransferService } from '../../services/transfer';
import { Transfer, TransferStatus } from '../../models/transfer.model';

@Component({
  selector: 'app-transfer-list',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzButtonModule, NzTagModule, NzDividerModule],
  templateUrl: './transfer-list.html',
  styleUrl: './transfer-list.css',
})
export class TransferList implements OnInit {
  transfers: Transfer[] = [];
  loading = false;
  readonly TransferStatus = TransferStatus;

  constructor(
    private transferService: TransferService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadTransfers();
    });
  }

  loadTransfers(): void {
    console.log("[TransferList] Loading transfers...");
    this.loading = true;
    this.cdr.detectChanges();
    this.transferService.getTransfers().subscribe({
      next: (data) => {
        console.log("[TransferList] Data received:", data);
        this.transfers = [...data]; // Create new reference for Angular change detection
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("[TransferList] Load error:", err);
        alert('Échec du chargement des virements');
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  updateStatus(id: number, status: TransferStatus): void {
    console.log(`[TransferList] Updating status for ID ${id} to ${status}`);
    this.transferService.updateStatus(id, status).subscribe({
      next: (updatedTransfer) => {
        console.log("[TransferList] Status update response:", updatedTransfer);
        
        // Optimistic local update
        const index = this.transfers.findIndex(t => t.id === id);
        if (index !== -1) {
          console.log("[TransferList] Performing local update at index", index);
          this.transfers[index] = { ...this.transfers[index], status: status };
          this.transfers = [...this.transfers]; // Trigger table refresh
        }
        
        this.cdr.detectChanges();
        alert(`Virement ${status === TransferStatus.VALIDATED ? 'validé' : 'rejeté'} avec succès`);
        
        // Final backend sync
        this.loadTransfers();
      },
      error: (err) => {
        console.error("[TransferList] Update error:", err);
        alert('Échec de la mise à jour du statut');
      }
    });
  }

  getStatusColor(status: TransferStatus | undefined): string {
    switch (status) {
      case TransferStatus.VALIDATED: return 'success';
      case TransferStatus.REJECTED: return 'error';
      case TransferStatus.PENDING: return 'processing';
      default: return 'default';
    }
  }
}
