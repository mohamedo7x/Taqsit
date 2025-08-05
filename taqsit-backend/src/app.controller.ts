import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class AppController {
  @Get()
  check() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
    };
  }
}
