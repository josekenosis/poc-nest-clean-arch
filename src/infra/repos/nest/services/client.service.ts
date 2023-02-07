import { AddClient } from '@/core/domain/contracts'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateClientDto } from '../dto'
import { ClientMapped } from '../entities'

@Injectable()
export class ClientsService {
  @InjectRepository(ClientMapped)
  private readonly clientRepository: Repository<ClientMapped>

  async add (createClientDto: CreateClientDto): Promise<AddClient.Result> {
    const client = this.clientRepository.create({ ...createClientDto })

    const result = await this.clientRepository.save(client)

    return {
      id_client: result.id_client,
      message: 'Criado',
      status: 201
    }
  }

  async findAll (): Promise<ClientMapped[]> {
    return this.clientRepository.find({})
  }
}
