import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/products/buy')
  getHello(): string {
    const qqq = 3;
    const aaa = '3';

    return this.appService.getHello();
  }
}
