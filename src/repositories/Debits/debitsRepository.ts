import { Debits } from "@prisma/client";

export interface DebitsRepository {
  findAll(clientId: number): Promise<Debits[]>
  delete(debitId: number): Promise<void>

}