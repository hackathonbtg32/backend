import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../../utils/Response";
import { ListLastAccountUseCase } from "./listAllUseCase";

export class ListLastAccountController {
  constructor(
    private listLastAccountUseCase: ListLastAccountUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { clientId } = request.params
    try {
      const debits = await this.listLastAccountUseCase.execute({
        clientId
      })

      return responseSuccess(response, debits)
    } catch (err: any) {
      return responseError(response, err.message)
    }
  }
}
