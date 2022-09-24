import { Express, Request, Response } from "express"
import { responseSuccess } from "../utils/Response"

import { brokerRouter } from "./brokers"
import { debitsRouter } from "./debits"

const routes = (app: Express) => {
  app.route('/').get((req: Request, res: Response) => {
    return responseSuccess(res, { titulo: "Curso de node" })
  })

  app.use('/', debitsRouter)
  app.use('/', brokerRouter)
}

export default routes
