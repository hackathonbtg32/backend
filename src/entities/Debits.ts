export class Debits {
  public readonly id: string
  name: string
  paymentData: JSON
  paymentValue: number
  createdAt: Date
  updatedAt: Date
  clientId: string

  constructor(props: Debits) {
    Object.assign(props, this)
  }
}