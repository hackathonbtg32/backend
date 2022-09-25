import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../../utils/Response";
import { CreateDebitsUseCase } from "./createUseCase";

export class CreateDebitsController {
  constructor(
    private createDebitsUseCase: CreateDebitsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { clientId } = request.params
    const {
      name,
      status,
      paymentData,
      paymentValue } = request.body

    try {
      await this.createDebitsUseCase.execute({
        clientId,
        name,
        status,
        paymentData,
        paymentValue,
      })
      return responseSuccess(response, {})
    } catch (err: any) {
      return responseError(response, err.message, 400)
    }
  }
}
