import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../../utils/Response";
import { DeleteBrokerUseCase } from "./deleteUseCase";

export class DeleteBrokerController {
  constructor(
    private deleteBrokerUseCase: DeleteBrokerUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { brokerId } = request.params

    try {
      await this.deleteBrokerUseCase.execute({
        brokerId

      })

      return responseSuccess(response, {})
    } catch (err: any) {
      return responseError(response, err.message, 400)
    }
  }
}
