import { SqlBrokerRepository } from "../../../repositories/Broker/SqlBrokerRepository";
import { ListAllBrokerController } from "./listAllController";
import { ListAllBrokerUseCase } from "./listAllUseCase";

const sqlDebitsRepository = new SqlBrokerRepository()

const listAllBrokerUseCase = new ListAllBrokerUseCase(
  sqlDebitsRepository
)

const listAllBrokerController = new ListAllBrokerController(
  listAllBrokerUseCase
)

export { listAllBrokerUseCase, listAllBrokerController };
