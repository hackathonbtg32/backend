import { SqlDebitsRepository } from "../../../repositories/Debits/SqlDebitsRepository";
import { ListAllDebitsController } from "./listAllController";
import { ListAllDebitsUseCase } from "./listAllUseCase";

const sqlDebitsRepository = new SqlDebitsRepository()

const listAllDebitsUseCase = new ListAllDebitsUseCase(
  sqlDebitsRepository
)

const listAllDebitsController = new ListAllDebitsController(
  listAllDebitsUseCase
)

export { listAllDebitsUseCase, listAllDebitsController };
