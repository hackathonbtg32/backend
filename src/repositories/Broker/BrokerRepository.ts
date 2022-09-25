import { Broker } from "@prisma/client";

export interface BrokerRepository {
  findAll(clientId: number): Promise<Broker[]>
  delete(brokerId: number): Promise<void>
  findAccValue(clientId: number): Promise<Broker[]>
  updateValue(brokerId: number, availableBrokerValue: number): Promise<void>
  insert(clientId: number, data: object): Promise<void>
}