import { SqlAccountRepository } from "../../../repositories/Account/SqlAccountRepository";
import { ListLastAccountController } from "./listAllController";
import { ListLastAccountUseCase } from "./listAllUseCase";

const sqlAccountRepository = new SqlAccountRepository()

const listLastAccountUseCase = new ListLastAccountUseCase(
  sqlAccountRepository
)

const listLastAccountController = new ListLastAccountController(
  listLastAccountUseCase
)

export { listLastAccountUseCase, listLastAccountController };
