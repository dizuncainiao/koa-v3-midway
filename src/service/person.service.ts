// todo step-four（编写 Service）
import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Person } from '../entity/person.entity';
import { Like, Repository } from 'typeorm';

@Provide()
export class PersonService {
  @InjectEntityModel(Person)
  personModel: Repository<Person>;

  async findPerson(name: string) {
    try {
      const condition = name
        ? {
            where: {
              user_name: Like(`%${name}%`), // 模糊查询，包含
            },
          }
        : {};

      return await this.personModel.find(condition);
    } catch (e) {
      console.error(e);
    }
  }

  async savePerson(data: Person) {
    try {
      await this.personModel.save(data);
    } catch (e) {
      console.error(e);
    }
  }

  async updatePerson(data: Person) {
    try {
      const personToUpdate = await this.personModel.findOne({
        where: {
          id: data.id,
        },
      });
      Object.assign(personToUpdate, data);

      await this.personModel.save(personToUpdate);
    } catch (e) {
      console.error(e);
    }
  }
}
