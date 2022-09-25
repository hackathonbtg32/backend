import { Express, Request, Response } from "express"
import { responseSuccess } from "../utils/Response"
import { accountRouter } from "./account"

import { brokerRouter } from "./brokers"
import { debitsRouter } from "./debits"
import { openFinanceRouter } from "./openFinance"

const routes = (app: Express) => {
  app.route('/').get((req: Request, res: Response) => {
    return responseSuccess(res, { titulo: "#btgFazTech" })
  })

  app.use(debitsRouter)
  app.use(brokerRouter)
  app.use(accountRouter)
  app.use(openFinanceRouter)
}

export default routes
