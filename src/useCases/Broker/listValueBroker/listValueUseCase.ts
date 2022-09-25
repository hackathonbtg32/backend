import { BrokerRepository } from "../../../repositories/Broker/BrokerRepository";
import { listValueBrokerDTO } from "./listValueDTO";

export class ListValueBrokerUseCase {
  constructor(
    private brokerRepository: BrokerRepository
  ) { }

  async execute(data: listValueBrokerDTO) {
    const clientId = Number(data.clientId)
    const brokers = await this.brokerRepository.findAccValue(clientId)
    return brokers
  }
}