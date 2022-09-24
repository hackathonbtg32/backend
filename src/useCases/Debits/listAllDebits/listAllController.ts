import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../../utils/Response";
import { ListAllDebitsUseCase } from "./listAllUseCase";

export class ListAllDebitsController {
  constructor(
    private listAllDebitsUseCase: ListAllDebitsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { clientId } = request.params
    try {
      const debits = await this.listAllDebitsUseCase.execute({
        clientId
      })
      return responseSuccess(response, debits)
    } catch (err: any) {
      return responseError(response, err.message, 400)
    }
  }
}
