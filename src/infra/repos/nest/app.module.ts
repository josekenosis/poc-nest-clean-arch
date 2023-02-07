import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ClientsModule } from './modules'
import { ClientMapped } from '@/infra/repos/nest/entities/client.entity'

@Module({
  imports: [
    ClientsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'skepfy',
      entities: [ClientMapped],
      synchronize: true,
      autoLoadEntities: true
    })
  ]
})
export class AppModule { }
