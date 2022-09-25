import { Broker } from "@prisma/client";

export interface BrokerRepository {
  findAll(clientId: number): Promise<Broker[]>
  delete(brokerId: number): Promise<void>
  findAccValue(clientId: number): Promise<Broker[]>
}