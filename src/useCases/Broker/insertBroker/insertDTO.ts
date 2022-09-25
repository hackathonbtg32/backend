export interface insertBrokerDTO {
  clientId?: String
  cnpj?: String
  cardLabel?: String
  namedBroker?: String
  status?: Number
  availableBrokerValue?: Number
  dataBrokers?: insertFromFront[]
}

export interface insertFromFront {
  label: String,
  organizationId: String,
}
