import { Request, Response } from "express";
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
      return response.status(201).send(debits)

    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}