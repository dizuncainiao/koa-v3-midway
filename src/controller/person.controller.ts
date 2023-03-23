import { Controller, Get, Inject } from '@midwayjs/core';
import { PersonService } from '../service/person.service';
import * as dayjs from 'dayjs';

@Controller('/')
export class PersonController {
  @Inject()
  personService: PersonService;

  @Get('/person')
  async getPerson() {
    try {
      const res = await this.personService.findPerson();
      return res.map(item => ({
        ...item,
        created_time: dayjs(item.created_time).format('YYYY-MM-DD HH:mm:ss'),
      }));
    } catch (e) {
      console.error(e);
    }
  }
}
