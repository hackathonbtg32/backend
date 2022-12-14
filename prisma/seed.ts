import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const User = {
  id: 1,
  name: 'Jhon Doe',
  email: 'jhondoe@hackha.com',
  password: '1234',
  status: 1,
  createdAt: new Date('2022-09-24 14:35:00'),
  updatedAt: new Date('2022-09-24 14:35:00')
}

const Account = {
  id: 1,
  totalValue: 200.00,
  clientId: 1,

  createdAt: new Date('2022-09-24 14:35:00'),
  updatedAt: new Date('2022-09-24 14:35:00')
}

const Client = {
  id: 1,
  cnpjcpf: '12345678912',
  
  userId: 1,
  createdAt: new Date('2022-09-24 14:35:00'),
  updatedAt: new Date('2022-09-24 14:35:00')
}

const Broker = {
  id: 1,
  availableBrokerValue: 200.00,
  cardLabel: 'Minha xp',
  cnpj: '45552164000160',
  namedBroker: 'Xp',
  clientId: 1,
  createdAt: new Date('2022-09-24 14:35:00'),
  updatedAt: new Date('2022-09-24 14:35:00')
}

const Debits = {
  id: 1,
  name: 'Escola de natação',
  paymentData: JSON.stringify({
    type: 'Boleto',
    paymentCode: '34191.79001 01043.510047 91020.150008 2 91180026000',
    paymentTo: 'Banco Roxinho',
    paymentDate: '',
    paymentDueDate: '2022-10-10 14:35:00',
    paymentPayedValue: 0.0,
    paymentStatus: 0,
  }),
  paymentValue: 150.00,
  clientId: 1,
  createdAt: new Date('2022-09-24 14:35:00'),
  updatedAt: new Date('2022-09-24 14:35:00')
}

async function main() {
  console.log(`Start seeding ...`)

  const user = await prisma.user.create({
    data: User,
  })
  console.log(`Created user with id: ${user.id}`)

  const client = await prisma.client.create({
    data: Client,
  })
  console.log(`Created client with id: ${client.id}`)

  const account = await prisma.account.create({
    data: Account,
  })
  console.log(`Created account with id: ${account.id}`)

  const broker = await prisma.broker.create({
    data: Broker,
  })
  console.log(`Created broker with id: ${broker.id}`)

  const debits = await prisma.debits.create({
    data: Debits,
  })
  console.log(`Created debits with id: ${debits.id}`)

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })