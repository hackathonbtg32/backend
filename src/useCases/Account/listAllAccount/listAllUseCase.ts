import { DebitsRepository } from "../../../repositories/Debits/debitsRepository";
import { listAllDebitsDTO } from "./listAllDTO";

export class ListAllDebitsUseCase {
  constructor(
    private debitsRepository: DebitsRepository
  ) { }

  async execute(data: listAllDebitsDTO) {
    const clientId = Number(data.clientId)
    const debits = await this.debitsRepository.findAll(clientId)
    return debits
  }
}