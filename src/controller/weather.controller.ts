import { Controller, Get, Inject, Query } from '@midwayjs/core';
import { WeatherService } from '../service/weather.service';
import { WeatherInfo } from '../interface';

@Controller('/')
export class WeatherController {
  @Inject()
  weatherService: WeatherService;

  @Get('/weather')
  async getWeatherInfo(@Query('cityId') cityId: string): Promise<WeatherInfo> {
    return this.weatherService.getWeather(cityId);
  }
}
