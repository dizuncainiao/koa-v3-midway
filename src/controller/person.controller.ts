import {
  Controller,
  Get,
  Post,
  Put,
  Inject,
  Query,
  Body,
} from '@midwayjs/core';
import { PersonService } from '../service/person.service';
import { Person } from '../entity/person.entity';

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

  // 增删改查：增加
  @Post('/create_person')
  // fixme 使用 json 传参可以接收到参数，FormData 不行需排查
  async createPerson(@Body() person: Person) {
    try {
      console.log('person: ', person);
      return this.personService.savePerson(person);
    } catch (e) {
      console.error(e);
    }
  }

  // 增删改查：修改
  @Put('/update_person')
  async updatePerson(@Body() person: Person) {
    try {
      return this.personService.updatePerson(person);
    } catch (e) {
      console.error(e);
    }
  }
}
