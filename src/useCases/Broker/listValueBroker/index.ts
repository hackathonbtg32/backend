import { SqlBrokerRepository } from "../../../repositories/Broker/SqlBrokerRepository";
import { ListValueBrokerController } from "./listValueController";
import { ListValueBrokerUseCase } from "./listValueUseCase";

const sqlBrokersRepository = new SqlBrokerRepository()

const listValueBrokerUseCase = new ListValueBrokerUseCase(
  sqlBrokersRepository
)

const listValueBrokerController = new ListValueBrokerController(
  listValueBrokerUseCase
)

export { listValueBrokerUseCase, listValueBrokerController };
