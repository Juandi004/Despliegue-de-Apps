import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { Customer } from '@prisma/client';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  async createCustomer(fullname: string, email: string): Promise<Customer> {
    return this.prisma.customer.create({
      data: {
        fullname,
        email,
      },
    });
  }

  async getCustomer(id: number): Promise<Customer> {
    return this.prisma.customer.findUnique({
      where: { id },
    });
  }

  async getAllCustomers(): Promise<Customer[]> {
    return this.prisma.customer.findMany();
  }
}
