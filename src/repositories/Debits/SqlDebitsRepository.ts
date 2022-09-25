import { Debits } from "@prisma/client";
import { prisma } from "../../prisma";
import { DebitsRepository } from "./debitsRepository";

export class SqlDebitsRepository implements DebitsRepository {
  async findAll(clientId: number): Promise<Debits[]> {
    const debits = await prisma.debits.findMany({
      where: {
        clientId: clientId,
        isRemoved: false

      }
    })
    return debits
  }

  async findPayed(clientId: number): Promise<Debits[]> {
    const debits = await prisma.debits.findMany({
      where: {
        clientId: clientId,
        status: 1,
        isRemoved: false

      }
    })
    return debits
  }

  async delete(debitId: number): Promise<void> {
    await prisma.debits.update({
      data: {
        isRemoved: true

      },
      where: {
        id: debitId
      }
    })
  }

  async nextDebitPay(clientId: number): Promise<Debits> {
    const debit = await prisma.debits.findFirst({
      where: {
        clientId: clientId,
        status: 0,
        isRemoved: false

      },
      orderBy: {
        paymentValue: 'asc',
      }
    })
    return debit as Debits
  }

  async updateDebit(debitId: number, debit: Debits): Promise<void> {
    if (!debit.paymentData) {
      debit.paymentData = {}
    }
    await prisma.debits.update({
      data: {
        status: debit.status,
        paymentData: debit.paymentData

      },
      where: {
        id: debitId,
      }
    })
  }

  async createDebit(clientId: number, debit: Debits): Promise<void> {
    const randomPaymentValue = Math.floor(Math.random() * (10 - 1000) + 1000)
    if (!debit.paymentData) {
      debit.paymentData = {}
    }
    await prisma.debits.create({
      data: {
        clientId: clientId,
        name: debit.name,
        paymentData: debit.paymentData,
        paymentValue: randomPaymentValue
      }
    }
    )
  }
}