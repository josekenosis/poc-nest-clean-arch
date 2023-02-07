import { ConnectionNotFoundError, TransactionNotFoundError } from '@/infra/repos/nest/helpers'
import { DbTransaction } from '@/core/application/contracts'
import { DataSource, QueryRunner } from 'typeorm'

export class PgConnection implements DbTransaction {
  private readonly dataSource!: DataSource
  private query?: QueryRunner

  async openTransaction (): Promise<void> {
    if (this.dataSource === undefined) throw new ConnectionNotFoundError()
    this.query = this.dataSource.createQueryRunner()
    await this.query.startTransaction()
  }

  async closeTransaction (): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.release()
  }

  async commit (): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.commitTransaction()
  }

  async rollback (): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.rollbackTransaction()
  }
}
