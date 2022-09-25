import { SqlDebitsRepository } from "../../../repositories/Debits/SqlDebitsRepository";
import { ListPayedDebitsController } from "./listPayedController";
import { ListPayedDebitsUseCase } from "./listPayedUseCase";

const sqlDebitsRepository = new SqlDebitsRepository()

const listPayedDebitsUseCase = new ListPayedDebitsUseCase(
  sqlDebitsRepository
)

const listPayedDebitsController = new ListPayedDebitsController(
  listPayedDebitsUseCase
)

export { listPayedDebitsUseCase, listPayedDebitsController };
