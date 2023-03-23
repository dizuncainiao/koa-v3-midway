// todo step-two（定义 Entity）
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as dayjs from 'dayjs';

const dateTransformer = {
  // 处理从数据库查询的格式
  from: (value: Date | number) => dayjs(value).format('YYYY-MM-DD HH:mm'),
  // 处理存入数据库的格式
  to: () => new Date(),
};

@Entity('person')
export class Person {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  user_name: string;

  @Column()
  age: number;

  @Column({
    transformer: dateTransformer,
  })
  created_time?: string;
}
