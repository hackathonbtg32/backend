import { Account } from "@prisma/client";
import { prisma } from "../../prisma";
import { AccountRepository } from "./AccountRepository";

export class SqlAccountRepository implements AccountRepository {
  async findById(clientId: number): Promise<Account> {
    const account = await prisma.account.findFirstOrThrow({
      where: {
        clientId: clientId
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return account
  }

}