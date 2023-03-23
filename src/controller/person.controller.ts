import {Controller, Get, Post, Inject, Query} from '@midwayjs/core';
import {PersonService} from '../service/person.service';
import {Person} from "../entity/person.entity";

@Controller('/')
export class PersonController {
  @Inject()
  personService: PersonService;

  // 增删改查：查询（采用 restful 蛇形命名法）
  @Get('/search_person')
  async getPerson(@Query('name') name: string) {
    try {
      return await this.personService.findPerson(name);
    } catch (e) {
      console.error(e);
    }
  }

  @Post('/create_person')
  // fixme
  async createPerson(@Query('data') data: Person) {
    try {
      console.log(data, 'data')
      return this.personService.savePerson(data)
    } catch (e) {
      console.error(e)
    }
  }
}
