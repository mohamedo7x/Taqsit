import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseMoodule } from './DatabaseStore/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { InstallmentsModule } from './installments/installments.module';
import { PaymentsModule } from './payments/payments.module';


@Module({
  imports: [DatabaseMoodule, AuthModule, UsersModule, CustomersModule, ProductsModule, InstallmentsModule, PaymentsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
