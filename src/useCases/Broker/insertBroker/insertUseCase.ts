import { BrokerRepository } from "../../../repositories/Broker/BrokerRepository";
import { insertBrokerDTO } from "./insertDTO";

export class InsertBrokerUseCase {
  constructor(
    private brokerRepository: BrokerRepository
  ) { }

  async execute(data: insertBrokerDTO) {
    const clientId = Number(data.clientId)

    console.log(`Execute: ${clientId}`)
    console.log(`Execute: ${data}`)

    var rawData = [
      {
        customerId: "1850de5a-3cec-11ed-b878-0242ac120002",
        customerName: "Jhon Doe",
        organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
        organizationName: "NOVA XP Investimentos",
        organizationCnpj: "00394706000185",
        availableBrokerValue: 600
      },
      {
        customerId: "1850de5a-3cec-11ed-b878-0242ac120002",
        customerName: "Jhon Doe",
        organizationId: "69665991-da55-4aac-a1f2-32d23daba8fb",
        organizationName: "Rico",
        organizationCnpj: "84050144000142",
        availableBrokerValue: 300
      },
      {
        customerId: "1850de5a-3cec-11ed-b878-0242ac120002",
        customerName: "Jhon Doe",
        organizationId: "a81729b5-ec71-4552-b4b1-26931c130154",
        organizationName: "Genérica 04",
        organizationCnpj: "53730309000101",
        availableBrokerValue: 75
      },
      {
        customerId: "1850de5a-3cec-11ed-b878-0242ac120002",
        customerName: "Jhon Doe",
        organizationId: "3fda1ef5-4b72-4557-bcbf-296780ba2c1f",
        organizationName: "Genérica 01",
        organizationCnpj: "37012911000149",
        availableBrokerValue: 5
      },
      {
        customerId: "1850de5a-3cec-11ed-b878-0242ac120002",
        customerName: "Jhon Doe",
        organizationId: "e7fc1280-4dd3-4977-bc24-c08ffea8baf5",
        organizationName: "Genérica 06",
        organizationCnpj: "34125492000163",
        availableBrokerValue: 613
      }
    ]

    for (let i in data.dataBrokers) {
      const broker = data.dataBrokers[Number(i)]

      // @ts-ignore
      const foundedRaw = rawData.find(e => e.organizationId === broker.organizationId)

      const toInsert: insertBrokerDTO = {
        cnpj: String(foundedRaw?.organizationCnpj),
        cardLabel: String(broker.label),
        namedBroker: String(foundedRaw?.organizationName),
        status: foundedRaw?.organizationRole == 'corretora' ? -1 : 0,
        availableBrokerValue: Number(foundedRaw?.availableBrokerValue),
      }

      console.log(toInsert)
      await this.brokerRepository.insert(clientId, toInsert)
    }
  }
}
