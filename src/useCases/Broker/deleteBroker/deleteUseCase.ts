import { BrokerRepository } from "../../../repositories/Broker/BrokerRepository";
import { deleteBrokerDTO } from "./deleteDTO";

export class DeleteBrokerUseCase {
  constructor(
    private brokerRepository: BrokerRepository
  ) { }

  async execute(data: deleteBrokerDTO) {
    const brokerId = Number(data.brokerId)
    await this.brokerRepository.delete(brokerId)
  }
}