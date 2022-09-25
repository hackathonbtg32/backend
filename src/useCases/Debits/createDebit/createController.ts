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
      paymentCode,
      paymentDueDate,
      paymentTo,
      paymentValue
    } = request.body

    const paymentData = {
      type: 'Boleto',
      paymentCode,
      paymentTo: 'BTG Pactual',
      paymentDate: '2022-12-12T14:35:00.000Z',
      paymentPayedValue: 0,
      paymentDueDate,
      paymentStatus: 0
    }

    try {
      await this.createDebitsUseCase.execute({
        clientId,
        name,
        paymentData: JSON.stringify(paymentData),
      })
      return responseSuccess(response, {})
    } catch (err: any) {
      return responseError(response, err.message, 400)
    }
  }
}