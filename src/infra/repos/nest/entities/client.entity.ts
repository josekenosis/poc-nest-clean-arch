import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity('tbl_client')
export class ClientMapped {
  @PrimaryGeneratedColumn()
    id_client: number

  @Column()
    nm_client: string

  @Column()
    email: string

  @CreateDateColumn({ type: 'date' })
    created_at: Date
}
