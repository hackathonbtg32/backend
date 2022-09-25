import { SqlBrokerRepository } from "../../../repositories/Broker/SqlBrokerRepository";
import { ListAllBrokerController } from "./listAllController";
import { ListAllBrokerUseCase } from "./listAllUseCase";

const sqlBrokersRepository = new SqlBrokerRepository()

const listAllBrokerUseCase = new ListAllBrokerUseCase(
  sqlBrokersRepository
)

const listAllBrokerController = new ListAllBrokerController(
  listAllBrokerUseCase
)

export { listAllBrokerUseCase, listAllBrokerController };
