import { Router } from "express";
import { deleteDebitController } from "../useCases/Debits/deleteDebit";
import { listAllDebitsController } from "../useCases/Debits/listAllDebits";

const debitsRouter = Router()

debitsRouter.get('/debits/:clientId', (request, response) => {
  return listAllDebitsController.handle(request, response)
})

debitsRouter.put('/debits/:debitId', (request, response) => {
  return deleteDebitController.handle(request, response)
})

export { debitsRouter };
