export class Account {
  public readonly id: string
  public clientId: number
  public totalValue: string
  public createdAt: Date
  public updatedAt: Date

  constructor(props: Account) {
    Object.assign(props, this)
  }
}