import { Module } from '@nestjs/common';
import { CustomersController } from './customer.controller';
import { CustomersService } from './customer.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService, PrismaService],
})
export class CustomersModule {}
