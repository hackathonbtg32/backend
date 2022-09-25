import { DebitsRepository } from "../../../repositories/Debits/debitsRepository";
import { nextDebitsDTO } from "./nextDTO";

export class NextDebitsUseCase {
  constructor(
    private debitsRepository: DebitsRepository
  ) { }

  async execute(data: nextDebitsDTO) {
    const clientId = Number(data.clientId)
    const debit = await this.debitsRepository.nextDebitPay(clientId)
    return debit
  }
}