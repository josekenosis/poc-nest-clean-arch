import { makeDbAddClient } from '@/main/factories/domain/usecases'
import { AddClientController, Controller } from '@/core/application/controllers'
import { makePgTransactionController } from '@/main/factories/application/decorators'

export const makeAddClientController = (): Controller => {
  const controller = new AddClientController(makeDbAddClient())
  return makePgTransactionController(controller)
}
