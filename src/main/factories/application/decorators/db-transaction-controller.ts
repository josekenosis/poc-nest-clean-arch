import { Controller } from '@/core/application/controllers'
import { DbTransactionController } from '@/core/application/decorators'
import { makePgConnection } from '@/main/factories/infra/repos/nest/helpers'

export const makePgTransactionController = (controller: Controller): DbTransactionController => {
  return new DbTransactionController(controller, makePgConnection())
}
