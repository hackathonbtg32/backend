import { Request, Response } from "express";
import { ListLastAccountUseCase } from "./listAllUseCase";

export class ListLastAccountController {
  constructor(
    private listLastAccountUseCase: ListLastAccountUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { clientId } = request.params
    try {
      const debits = await this.listLastAccountUseCase.execute({
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