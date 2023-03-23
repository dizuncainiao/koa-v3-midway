// todo step-two（定义 Entity）
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('person')
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_name: string;

  @Column()
  age: number;

  @Column()
  created_time: string;
}
