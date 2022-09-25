import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../../utils/Response";
import { ListPayedDebitsUseCase } from "./listPayedUseCase";

export class ListPayedDebitsController {
  constructor(
    private listPayedDebitsUseCase: ListPayedDebitsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { clientId } = request.params
    try {
      const debits = await this.listPayedDebitsUseCase.execute({
        clientId
      })
      return responseSuccess(response, debits)
    } catch (err: any) {
      return responseError(response, err.message, 400)
    }
  }
}
