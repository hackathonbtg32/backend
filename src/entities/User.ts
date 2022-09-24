export class User {
  public readonly id: string
  name: string
  email: string
  password: string
  status: number
  createdAt: Date
  updatedAt: Date
  clientId: string

  constructor(props: User) {
    Object.assign(props, this)
  }
}