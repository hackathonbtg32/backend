export class Broker {
  public readonly id: string
  namedBroker: string
  cardLabel: string
  cnpj: string
  availableBrokerValue: Number
  createdAt: Date
  updatedAt: Date
  clientId: string

  constructor(props: Broker) {
    Object.assign(props, this)
  }
}