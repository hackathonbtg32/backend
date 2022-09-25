import { Debits } from "@prisma/client";

export interface DebitsRepository {
  findAll(clientId: number): Promise<Debits[]>
  delete(debitId: number): Promise<void>
  nextDebitPay(clientId: number): Promise<Debits>
  updateDebit(debitId: number, debit: Object): Promise<void>
  createDebit(clientId: number, debit: Object): Promise<void>

}