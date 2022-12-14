import { Router } from "express"; import { responseSuccess } from "../utils/Response";
import { ListAllBrokerUseCase } from "../useCases/Broker/listAllBroker/listAllUseCase";
import { SqlBrokerRepository } from "../repositories/Broker/SqlBrokerRepository";
import { listAllBrokerDTO } from "../useCases/Broker/listAllBroker/listAllDTO";

const openFinanceRouter = Router()

openFinanceRouter.get('/openfinance/brokers/:clientId', (_, response) => {
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

  const sqlBrokersRepository = new SqlBrokerRepository()
  const listAllBrokerUseCase = new ListAllBrokerUseCase(sqlBrokersRepository)

  const data: listAllBrokerDTO = {
    clientId: '1'
  }

  listAllBrokerUseCase.execute(data).then(res => {
    for (let i in res) {
      const index = rawData.findIndex(e => e.organizationCnpj === res[i].cnpj);
      rawData = rawData.filter((_, i) => i !== index);
    }

    return responseSuccess(response, rawData, 'Ok')
  })
})

export { openFinanceRouter };
