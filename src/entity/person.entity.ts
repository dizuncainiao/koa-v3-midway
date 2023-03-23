// todo step-two（定义 Entity）
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('person')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('char')
  userName: string;

  @Column('tinyint')
  age: number;

  @Column('datetime')
  createdTime: string;
}
