import { MidwayError } from '@midwayjs/core';

export class PersonEmptyDataError extends MidwayError {
  constructor(err?: Error) {
    super('person data is empty', {
      cause: err,
    });
    if (err?.stack) {
      this.stack = err.stack;
    }
  }
}
