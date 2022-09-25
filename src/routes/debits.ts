import { Router } from "express";
import { deleteDebitController } from "../useCases/Debits/deleteDebit";
import { listAllDebitsController } from "../useCases/Debits/listAllDebits";
import { nextDebitsController } from "../useCases/Debits/nextDebit";

const debitsRouter = Router()

debitsRouter.get('/debits/:clientId', (request, response) => {
  return listAllDebitsController.handle(request, response)
})

debitsRouter.get('/debits/nextDebitToPay/:clientId', (request, response) => {
  return nextDebitsController.handle(request, response)
})

debitsRouter.put('/debits/:debitId', (request, response) => {
  return deleteDebitController.handle(request, response)
})

export { debitsRouter };
