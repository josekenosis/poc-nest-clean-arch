import { ApiProperty } from '@nestjs/swagger'

export class CreateClientDto {
  @ApiProperty()
  readonly nm_client: string

  @ApiProperty()
  readonly email: string
}
