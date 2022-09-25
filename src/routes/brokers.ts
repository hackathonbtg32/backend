import { Router } from "express";
import { deleteBrokerController } from "../useCases/Broker/deleteBroker";
import { listAllBrokerController } from "../useCases/Broker/listAllBroker";
import { listValueBrokerController } from "../useCases/Broker/listValueBroker";

const brokerRouter = Router()

brokerRouter.get('/brokers/:clientId', (request, response) => {
  return listAllBrokerController.handle(request, response)
})

brokerRouter.get('/brokers/avaliableaccountvalue/:clientId', (request, response) => {
  return listValueBrokerController.handle(request, response)
})

brokerRouter.put('/broker/:brokerId', (request, response) => {
  return deleteBrokerController.handle(request, response)
})

export { brokerRouter };
