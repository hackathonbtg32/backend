import { SqlDebitsRepository } from "../../../repositories/Debits/SqlDebitsRepository";
import { NextDebitsController } from "./nextController";
import { NextDebitsUseCase } from "./nextUseCase";

const sqlDebitsRepository = new SqlDebitsRepository()

const nextDebitsUseCase = new NextDebitsUseCase(
  sqlDebitsRepository
)

const nextDebitsController = new NextDebitsController(
  nextDebitsUseCase
)

export { nextDebitsUseCase, nextDebitsController };
