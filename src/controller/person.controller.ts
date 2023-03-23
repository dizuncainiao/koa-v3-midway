import { Controller, Get, Inject } from '@midwayjs/core';
import { PersonService } from '../service/person.service';

@Controller('/')
export class PersonController {
  @Inject()
  personService: PersonService;

  @Get('/person')
  async getPerson() {
    try {
      return await this.personService.findPerson();
    } catch (e) {
      console.error(e);
    }
  }
}
