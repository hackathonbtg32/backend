import { SqlBrokerRepository } from "../../../repositories/Broker/SqlBrokerRepository";
import { UpdateValueBrokerController } from "./updateValueController";
import { UpdateValueBrokerUseCase } from "./updateValueUseCase";

const sqlBrokersRepository = new SqlBrokerRepository()

const updateValueBrokerUseCase = new UpdateValueBrokerUseCase(
  sqlBrokersRepository
)

const updateValueBrokerController = new UpdateValueBrokerController(
  updateValueBrokerUseCase
)

export { updateValueBrokerUseCase, updateValueBrokerController };
