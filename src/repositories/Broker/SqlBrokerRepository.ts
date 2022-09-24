import { Broker } from "@prisma/client";
import { prisma } from "../../prisma";
import { BrokerRepository } from "./BrokerRepository";

export class SqlBrokerRepository implements BrokerRepository {
  async findAll(clientId: number): Promise<Broker[]> {
    const broker = await prisma.broker.findMany({
      where: {
        clientId: clientId
      }
    })
    return broker
  }
}