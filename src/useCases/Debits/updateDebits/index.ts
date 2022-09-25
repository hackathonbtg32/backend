import { SqlDebitsRepository } from "../../../repositories/Debits/SqlDebitsRepository";
import { UpdateDebitsController } from "./updateController";
import { UpdateDebitsUseCase } from "./updateUseCase";

const sqlDebitsRepository = new SqlDebitsRepository()

const updateDebitsUseCase = new UpdateDebitsUseCase(
  sqlDebitsRepository
)

const updateDebitsController = new UpdateDebitsController(
  updateDebitsUseCase
)

export { updateDebitsUseCase, updateDebitsController };
