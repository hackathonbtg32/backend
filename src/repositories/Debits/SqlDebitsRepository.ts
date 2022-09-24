import { Debits } from "@prisma/client";
import { prisma } from "../../prisma";
import { DebitsRepository } from "./debitsRepository";

export class SqlDebitsRepository implements DebitsRepository {
  async findAll(clientId: number): Promise<Debits[]> {
    const debits = await prisma.debits.findMany({
      where: {
        clientId: clientId
      }
    })
    return debits
  }
  async delete(debitId: number): Promise<void> {
    await prisma.debits.update({
      data: {
        status: 0
      },
      where: {
        id: debitId
      }
    })
  }
}