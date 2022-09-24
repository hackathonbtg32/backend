import { Express, Request, Response } from "express"
import { responseSuccess } from "../utils/Response"

const routes = (app: Express) => {
  app.route('/').get((req: Request, res: Response) => {
    return responseSuccess(res, { titulo: "Curso de node" })
  })
}

export default routes
