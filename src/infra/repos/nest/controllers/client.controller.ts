import { ClientMapped } from '../entities/client.entity'
import { ClientsService } from '../services/client.service'
import {
  Body,
  Controller,
  Get,
  Post
} from '@nestjs/common'
import { AddClient } from '@/core/domain/contracts'
import { CreateClientDto } from '../dto'

@Controller('clients')
export class ClientsController {
  constructor (private readonly clientsService: ClientsService) { }

  @Post()
  async create (@Body() createClientDto: CreateClientDto): Promise<AddClient.Result> {
    return await this.clientsService.add(createClientDto)
  }

  @Get()
  async findAll (): Promise<ClientMapped[]> {
    return this.clientsService.findAll()
  }
}
