import { Router } from "express";
import { deleteBrokerController } from "../useCases/Broker/deleteBroker";
import { listAllBrokerController } from "../useCases/Broker/listAllBroker";

const brokerRouter = Router()

brokerRouter.get('/brokers/:clientId', (request, response) => {
  return listAllBrokerController.handle(request, response)
})

brokerRouter.put('/broker/:brokerId', (request, response) => {
  return deleteBrokerController.handle(request, response)
})

export { brokerRouter };
