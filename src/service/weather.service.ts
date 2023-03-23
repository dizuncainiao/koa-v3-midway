import { Provide, makeHttpRequest } from '@midwayjs/core';
import { WeatherInfo } from '../interface';

@Provide()
export class WeatherService {
  async getWeather(cityId: string): Promise<WeatherInfo> {
    const res = await makeHttpRequest(
      `http://www.weather.com.cn/data/cityinfo/${cityId}.html`,
      {
        dataType: 'json',
      }
    );

    if (res.status === 200) {
      return (res as any).data;
    }
  }
}
