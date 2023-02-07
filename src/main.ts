import './main/config/module-alias'
import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/infra/repos/nest/app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('Client Api')
    .setDescription('API de clientes')
    .setVersion('1.0')
    .addTag('clients')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api-docs', app, document)

  await app.listen(3000)
}
void bootstrap()
