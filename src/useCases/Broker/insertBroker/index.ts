import { SqlBrokerRepository } from "../../../repositories/Broker/SqlBrokerRepository";
import { InsertBrokerController } from "./insertController";
import { InsertBrokerUseCase } from "./insertUseCase";

const sqlDebitsRepository = new SqlBrokerRepository()

const insertBrokerUseCase = new InsertBrokerUseCase(
  sqlDebitsRepository
)

const insertBrokerController = new InsertBrokerController(
  insertBrokerUseCase
)

export { insertBrokerUseCase, insertBrokerController };
