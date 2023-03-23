import {Controller, Get, Inject, Query} from '@midwayjs/core';
import {PersonService} from '../service/person.service';

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
}
