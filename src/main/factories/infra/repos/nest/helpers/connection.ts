import { PgConnection } from '@/infra/repos/nest/helpers'

export const makePgConnection = (): PgConnection => {
  return new PgConnection()
}
