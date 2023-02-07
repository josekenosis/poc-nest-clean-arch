import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ClientsController } from '../controllers'
import { ClientsService } from '../services'
import { ClientMapped } from '../entities/client.entity'

@Module({
  imports: [TypeOrmModule.forFeature([ClientMapped])],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
