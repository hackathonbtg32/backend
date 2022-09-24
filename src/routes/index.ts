import { Express, Request, Response } from "express"
import { responseSuccess } from "../utils/Response"

import brokers from "./brokers"
import { debitsRouter } from "./debits"

const routes = (app: Express) => {
  app.route('/').get((req: Request, res: Response) => {
    return responseSuccess(res, { titulo: "Curso de node" })
  })

  app.use(brokers)
  app.use('/', debitsRouter)
}

export default routes
