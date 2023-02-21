import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Users } from './Users';

@Entity()
export class Documents {
  @PrimaryGeneratedColumn()
  id: number

  @Column() 
  title: string

  @Column()
  content: string

  @Column()
  color: string

  @Column()
  image: string

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deleted_at: Date

  @ManyToOne(() => Users, (user) => user, {nullable: false})
  user: number
}