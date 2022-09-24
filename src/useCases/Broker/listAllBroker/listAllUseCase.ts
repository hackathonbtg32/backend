import { BrokerRepository } from "../../../repositories/Broker/BrokerRepository";
import { listAllBrokerDTO } from "./listAllDTO";

export class ListAllBrokerUseCase {
  constructor(
    private brokerRepository: BrokerRepository
  ) { }

  async execute(data: listAllBrokerDTO) {
    const clientId = Number(data.clientId)
    const brokers = await this.brokerRepository.findAll(clientId)
    return brokers
  }
}