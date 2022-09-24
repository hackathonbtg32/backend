import { SqlBrokerRepository } from "../../../repositories/Broker/SqlBrokerRepository";
import { DeleteBrokerController } from "./deleteController";
import { DeleteBrokerUseCase } from "./deleteUseCase";

const sqlDebitsRepository = new SqlBrokerRepository()

const deleteBrokerUseCase = new DeleteBrokerUseCase(
  sqlDebitsRepository
)

const deleteBrokerController = new DeleteBrokerController(
  deleteBrokerUseCase
)

export { deleteBrokerUseCase, deleteBrokerController };
