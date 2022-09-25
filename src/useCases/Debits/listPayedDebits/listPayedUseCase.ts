import { DebitsRepository } from "../../../repositories/Debits/debitsRepository";
import { listPayedDebitsDTO } from "./listPayedDTO";

export class ListPayedDebitsUseCase {
  constructor(
    private debitsRepository: DebitsRepository
  ) { }

  async execute(data: listPayedDebitsDTO) {
    const clientId = Number(data.clientId)
    const debits = await this.debitsRepository.findPayed(clientId)
    return debits
  }
}