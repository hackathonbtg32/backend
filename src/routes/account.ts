import { Router } from "express";
import { listLastAccountController } from "../useCases/Account/listLastAccount";

const accountRouter = Router()

accountRouter.get('/account/last/:clientId', (request, response) => {
  return listLastAccountController.handle(request, response)
})


export { accountRouter };
