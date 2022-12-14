import { Broker } from "@prisma/client";
import { prisma } from "../../prisma";
import { BrokerRepository } from "./BrokerRepository";

export class SqlBrokerRepository implements BrokerRepository {
  async findAll(clientId: number): Promise<Broker[]> {
    const broker = await prisma.broker.findMany({
      where: {
        clientId: clientId,
        isRemoved: false,
      }
    })
    return broker
  }
  async delete(brokerId: number): Promise<void> {
    await prisma.broker.update({
      data: {
        isRemoved: true
      },
      where: {
        id: brokerId
      }
    })
  }

  async findAccValue(clientId: number): Promise<Broker[]> {
    const values = await prisma.broker.findMany({
      where: {
        clientId: clientId,
        AND: {
          isRemoved: false,
          OR: [
            { status: -1 },
            { status: 0 }
          ]
        }
      }
    })
    return values
  }

  async updateValue(brokerId: number, availableBrokerValue: number): Promise<void> {
    await prisma.broker.update({
      data: {
        availableBrokerValue: availableBrokerValue,
      },
      where: {
        id: brokerId
      }
    })
  }

  async insert(clientId: number, data: Broker): Promise<void> {
    await prisma.broker.create({
      data: {
        cnpj: data.cnpj,
        clientId: clientId,
        cardLabel: data.cardLabel,
        namedBroker: data.namedBroker,
        status: data.status,
        availableBrokerValue: data.availableBrokerValue,
      }
    })
  }
}
