import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../../utils/Response";
import { NextDebitsUseCase } from "./nextUseCase";

export class NextDebitsController {
  constructor(
    private nextDebitsUseCase: NextDebitsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { clientId } = request.params
    try {
      const debit = await this.nextDebitsUseCase.execute({
        clientId
      })
      return responseSuccess(response, debit)
    } catch (err: any) {
      return responseError(response, err.message, 400)
    }
  }
}
