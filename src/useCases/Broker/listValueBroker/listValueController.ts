import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../../utils/Response";
import { ListValueBrokerUseCase } from "./listValueUseCase";

export class ListValueBrokerController {
  constructor(
    private listValueBrokerUseCase: ListValueBrokerUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { clientId } = request.params
    try {
      const brokers = await this.listValueBrokerUseCase.execute({
        clientId
      })

      return responseSuccess(response, brokers)
    } catch (err: any) {
      return responseError(response, err.message, 400)
    }
  }
}
