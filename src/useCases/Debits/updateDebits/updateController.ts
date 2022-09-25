import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../../utils/Response";
import { UpdateDebitsUseCase } from "./updateUseCase";

export class UpdateDebitsController {
  constructor(
    private updateDebitsUseCase: UpdateDebitsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { debitId } = request.params
    const {
      status,
      paymentData } = request.body

    try {
      await this.updateDebitsUseCase.execute({
        debitId,
        status,
        paymentData
      })
      return responseSuccess(response, {})
    } catch (err: any) {
      return responseError(response, err.message, 400)
    }
  }
}
