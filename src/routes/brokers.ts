import { Router } from "express";
import { listAllBrokerController } from "../useCases/Broker/listAllBroker";

const brokerRouter = Router()

brokerRouter.get('/brokers/:clientId', (request, response) => {
  return listAllBrokerController.handle(request, response)
})


export { brokerRouter };
