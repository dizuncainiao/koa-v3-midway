import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1679535584335_3615',
  koa: {
    port: 7001,
  },
  // todo step-three（配置 mysql）
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '',
        port: 3306,
        username: '',
        password: '',
        database: undefined,
        synchronize: false, // 注意：这个要写 false，因为已经有数据了
        logging: false,
        // 自动扫描 entity 配置
        entities: ['**/entity/*.entity{.ts}'],
      },
    },
  },
} as MidwayConfig;
