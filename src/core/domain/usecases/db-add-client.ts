import { AddClient } from '@/core/domain/contracts'

export class DbAddClient implements AddClient {
  constructor (
    private readonly addClientRepository: AddClient
  ) {}

  async add (clientData: AddClient.Params): Promise<AddClient.Result> {
    const clientResult = await this.addClientRepository.add({ ...clientData })

    return clientResult
  }
}
