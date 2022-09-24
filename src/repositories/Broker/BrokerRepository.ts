import { Broker } from "@prisma/client";

export interface BrokerRepository {
  findAll(clientId: number): Promise<Broker[]>
}