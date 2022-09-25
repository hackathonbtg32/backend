import { Router } from "express";
import { deleteBrokerController } from "../useCases/Broker/deleteBroker";
import { insertBrokerController } from "../useCases/Broker/insertBroker";
import { listAllBrokerController } from "../useCases/Broker/listAllBroker";
import { listValueBrokerController } from "../useCases/Broker/listValueBroker";
import { updateValueBrokerController } from "../useCases/Broker/updateValueBroker";

const brokerRouter = Router()

brokerRouter.get('/brokers/:clientId', (request, response) => {
  return listAllBrokerController.handle(request, response)
})

brokerRouter.get('/brokers/avaliablevalue/:clientId', (request, response) => {
  return listValueBrokerController.handle(request, response)
})

brokerRouter.put('/broker/:brokerId', (request, response) => {
  return deleteBrokerController.handle(request, response)
})

brokerRouter.post('/broker/insert/:clientId', (request, response) => {
  return insertBrokerController.handle(request, response)
})

brokerRouter.patch('/broker/value/:brokerId', (request, response) => {
  return updateValueBrokerController.handle(request, response)
})

export { brokerRouter };
