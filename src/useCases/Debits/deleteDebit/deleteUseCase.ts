import { DebitsRepository } from "../../../repositories/Debits/debitsRepository";
import { deleteDebitDTO } from "./deleteDTO";

export class DeleteDebitUseCase {
  constructor(
    private debitRepository: DebitsRepository
  ) { }

  async execute(data: deleteDebitDTO) {
    const debitId = Number(data.debitId)
    await this.debitRepository.delete(debitId)
  }
}