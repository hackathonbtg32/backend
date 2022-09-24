export class Client {
  public readonly id: Number
  public cnpjcpf: string
  public userId: Number
  public createdAt: Date
  public updatedAt: Date

  constructor(props: Client) {
    Object.assign(props, this)
  }
}