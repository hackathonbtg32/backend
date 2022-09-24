import { Router } from "express";
import { listAllDebitsController } from "../useCases/Debits/listAllDebits";

const debitsRouter = Router()

debitsRouter.get('/debits/:clientId', (request, response) => {
  return listAllDebitsController.handle(request, response)
})


export { debitsRouter };
