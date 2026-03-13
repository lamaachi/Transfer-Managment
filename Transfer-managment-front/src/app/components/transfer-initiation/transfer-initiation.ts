import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TransferService } from '../../services/transfer';
import { Transfer } from '../../models/transfer.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transfer-initiation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzInputNumberModule,
    NzIconModule,
    FormsModule
  ],
  templateUrl: './transfer-initiation.html',
  styleUrl: './transfer-initiation.css',
})
export class TransferInitiation implements OnInit {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transferService: TransferService
  ) {
    console.log("[TransferInitiation] Component constructor called");
    this.validateForm = this.fb.group({
      senderAccount: [null, [Validators.required]],
      receiverAccount: [null, [Validators.required]],
      amount: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    console.log("[TransferInitiation] ngOnInit called");
  }

  submitForm(): void {
    
    
    if (this.validateForm.valid) {
      const transfer: Transfer = this.validateForm.value;
      this.transferService.createTransfer(transfer).subscribe({
        next: (resp) => {
          alert('Virement initié avec succès');
          this.validateForm.reset();
        },
        error: (err) => {
          alert('Échec de l\'initiation du virement');
        }
      });
    } else {
      Object.entries(this.validateForm.controls).forEach(([name, control]) => {
        if (control.invalid) {
          console.log(`[TransferInitiation] Control '${name}' is invalid:`, control.errors);
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
