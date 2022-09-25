import { BrokerRepository } from "../../../repositories/Broker/BrokerRepository";
import { updateValueBrokerDTO } from "./updateValueDTO";

export class UpdateValueBrokerUseCase {
  constructor(
    private brokerRepository: BrokerRepository
  ) { }

  async execute(data: updateValueBrokerDTO) {
    const clientId = Number(data.brokerId)
    const brokerValue = Number(data.availableBrokerValue)
    const brokers = await this.brokerRepository.updateValue(clientId, brokerValue)
    return brokers
  }
}