import { DebitsRepository } from "../../../repositories/Debits/debitsRepository";
import { createDebitsDTO } from "./createDTO";

export class CreateDebitsUseCase {
  constructor(
    private debitsRepository: DebitsRepository
  ) { }

  async execute(data: createDebitsDTO) {
    const clientId = Number(data.clientId)
    const debit = {
      name: data.name,
      paymentValue: data.paymentValue,
      paymentData: data.paymentData
    }

    await this.debitsRepository.createDebit(clientId, debit)
  }
}