import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EmployeesModule } from './employees/employees.module';
import { RecipientsModule } from './recipients/recipients.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    EmployeesModule,
    RecipientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
