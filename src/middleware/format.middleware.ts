import { Middleware, IMiddleware } from '@midwayjs/core';
import { NextFunction, Context } from '@midwayjs/koa';

@Middleware()
// 中间件：统一返回格式
export class FormatMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      console.log('控制器前执行的逻辑');

      // 拿到下一个中间件或控制器的返回值（此处的 result 拿到的是下一个中间件 ReportMiddleware 的返回值）
      const result = await next();

      console.log('控制器之后执行的逻辑');

      // 返回给上一个中间件的结果
      console.log('FormatMiddleware 的返回结果');
      return {
        data: result,
        code: 0,
        msg: 'success',
      };
    };
  }

  ignore(ctx: Context): boolean {
    // /v1/weather 需要返回一个 html 字符串，所以得跳过该中间件的格式化
    return ctx.path.includes('/v1/weather');
  }
}
