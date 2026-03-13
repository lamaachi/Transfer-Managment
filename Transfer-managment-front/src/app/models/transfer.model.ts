export enum TransferStatus {
  PENDING = 'PENDING',
  VALIDATED = 'VALIDATED',
  REJECTED = 'REJECTED'
}

export interface Transfer {
  id?: number;
  senderAccount: string;
  receiverAccount: string;
  amount: number;
  status?: TransferStatus;
  executionDate?: string;
}