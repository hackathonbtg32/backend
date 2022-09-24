import { Account } from "@prisma/client";

export interface AccountRepository {
  findById(clientId: number): Promise<Account>
}