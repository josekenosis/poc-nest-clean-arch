import { AddClient } from '@/core/domain/contracts'
import { DbAddClient } from '@/core/domain/usecases'
import { ClientsService } from '@/infra/repos/nest/services'

export const makeDbAddClient = (): AddClient => {
  const clientRepository = new ClientsService()
  return new DbAddClient(clientRepository)
}
