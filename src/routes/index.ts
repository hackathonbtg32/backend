import { Express, Request, Response } from "express"
import { responseSuccess } from "../utils/Response"

import brokers from "./brokers"

const routes = (app: Express) => {
  app.route('/').get((req: Request, res: Response) => {
    return responseSuccess(res, { titulo: "Curso de node" })
  })

  app.use(brokers)
}

export default routes
