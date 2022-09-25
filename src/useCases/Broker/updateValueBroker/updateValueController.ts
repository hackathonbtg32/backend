import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../../utils/Response";
import { UpdateValueBrokerUseCase } from "./updateValueUseCase";

export class UpdateValueBrokerController {
  constructor(
    private updateValueBrokerUseCase: UpdateValueBrokerUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { brokerId } = request.params
    const { availableBrokerValue } = request.body
    try {
      await this.updateValueBrokerUseCase.execute({
        brokerId,
        availableBrokerValue
      })

      return responseSuccess(response, {})
    } catch (err: any) {
      return responseError(response, err.message, 400)
    }
  }
}
