import { DebitsRepository } from "../../../repositories/Debits/debitsRepository";
import { updateDebitsDTO } from "./updateDTO";

export class UpdateDebitsUseCase {
  constructor(
    private debitsRepository: DebitsRepository
  ) { }

  async execute(data: updateDebitsDTO) {
    const debitId = Number(data.debitId)

    const debit = {
      status: data.status,
      paymentData: data.paymentData
    }
    await this.debitsRepository.updateDebit(debitId, debit)
  }
}