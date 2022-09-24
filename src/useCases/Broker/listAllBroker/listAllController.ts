import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../../utils/Response";
import { ListAllBrokerUseCase } from "./listAllUseCase";

export class ListAllBrokerController {
  constructor(
    private listAllBrokerUseCase: ListAllBrokerUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { clientId } = request.params
    try {
      const debits = await this.listAllBrokerUseCase.execute({
        clientId
      })

      return responseSuccess(response, debits)
    } catch (err: any) {
      return responseError(response, err.message, 400)
    }
  }
}
