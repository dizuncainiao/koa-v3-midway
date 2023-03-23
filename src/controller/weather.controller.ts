import { Controller, Get, Inject, Query } from '@midwayjs/core';
import { WeatherService } from '../service/weather.service';
// import { WeatherInfo } from '../interface';
import { Context } from '@midwayjs/koa';

@Controller('/')
export class WeatherController {
  @Inject()
  weatherService: WeatherService;

  @Inject()
  ctx: Context;

  @Get('/weather')
  async getWeatherInfo(@Query('cityId') cityId: string): Promise<void> {
    try {
      const res = await this.weatherService.getWeather(cityId);
      await this.ctx.render('info', res.weatherinfo);
    } catch (e) {
      console.log(e);
    }
  }
}
