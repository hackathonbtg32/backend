import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../../utils/Response";
import { DeleteDebitUseCase } from "./deleteUseCase";

export class DeleteDebitController {
  constructor(
    private deleteDebitUseCase: DeleteDebitUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { debitId } = request.params

    try {
      await this.deleteDebitUseCase.execute({
        debitId
      })

      return responseSuccess(response, {})
    } catch (err: any) {
      return responseError(response, err.message, 400)
    }
  }
}
