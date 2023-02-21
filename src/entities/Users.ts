import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  last_name: string

  @Column({ type: 'varchar', length: 10 })
  phone: string

  @Column()
  email: string

  @Column()
  password: string

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  last_login: Date

  @Column({ type: 'varchar', length: 155, nullable: true })
  token: string

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date

}