import { SqlDebitsRepository } from "../../../repositories/Debits/SqlDebitsRepository";
import { CreateDebitsController } from "./createController";
import { CreateDebitsUseCase } from "./createUseCase";

const sqlDebitsRepository = new SqlDebitsRepository()

const createDebitsUseCase = new CreateDebitsUseCase(
  sqlDebitsRepository
)

const createDebitsController = new CreateDebitsController(
  createDebitsUseCase
)

export { createDebitsUseCase, createDebitsController };
