import { Request, Response } from "express";
import { ListAllBrokerUseCase } from "./listAllUseCase";

export class ListAllBrokerController {
  constructor(
    private listAllBrokerUseCase: ListAllBrokerUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { clientId } = request.params
    try {
      const debits = await this.listAllBrokerUseCase.execute({
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