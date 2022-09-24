import { SqlDebitsRepository } from "../../../repositories/Debits/SqlDebitsRepository";
import { DeleteDebitController } from "./deleteController";
import { DeleteDebitUseCase } from "./deleteUseCase";

const sqlDebitsRepository = new SqlDebitsRepository()

const deleteDebitUseCase = new DeleteDebitUseCase(
  sqlDebitsRepository
)

const deleteDebitController = new DeleteDebitController(
  deleteDebitUseCase
)

export { deleteDebitUseCase, deleteDebitController };
