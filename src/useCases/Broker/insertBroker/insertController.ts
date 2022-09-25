import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../../utils/Response";
import { InsertBrokerUseCase } from "./insertUseCase";

export class InsertBrokerController {
  constructor(
    private insertBrokerUseCase: InsertBrokerUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { clientId } = request.params
    const {dataBrokers} = request.body

    console.log(`Controller: ${dataBrokers}`)

    try {
      await this.insertBrokerUseCase.execute({
        clientId,
        dataBrokers,
      })
      return responseSuccess(response, {})
    } catch (err: any) {
      return responseError(response, err.message, 400)
    }
  }
}
