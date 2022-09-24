import { AccountRepository } from "../../../repositories/Account/AccountRepository";
import { listLastAccountDTO } from "./listAllDTO";

export class ListLastAccountUseCase {
  constructor(
    private accountRepository: AccountRepository
  ) { }

  async execute(data: listLastAccountDTO) {
    const clientId = Number(data.clientId)
    const account = await this.accountRepository.findById(clientId)
    return account
  }
}