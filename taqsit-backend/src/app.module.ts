import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseMoodule } from './DatabaseStore/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { InstallmentsModule } from './installments/installments.module';
import { PaymentsModule } from './payments/payments.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      cache: true,
    })
    ,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      global:true,
    }),
    DatabaseMoodule,
    AuthModule,
    UsersModule,
    CustomersModule,
    ProductsModule,
    InstallmentsModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
