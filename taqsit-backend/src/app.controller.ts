import { Controller, Get } from '@nestjs/common';


@Controller('health')
export class AppController {

  @Get()
  check() {
    return { 
      status: 'ok' ,
       timestamp: new Date().toISOString() ,
        version: '1.0.0' ,
         environment: process.env.NODE_ENV || 'development'
    }
  }
}
