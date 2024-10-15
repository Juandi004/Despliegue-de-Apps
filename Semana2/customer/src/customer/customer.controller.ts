import {
    Controller,
    Get,
    Post,
    Param,
    Query,
    Body,
  } from '@nestjs/common';
  import { CustomersService } from './customer.service';
  import { Customer } from '@prisma/client';
  
  @Controller('customers')
  export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}
  
    @Post(':id') // @PathVariable
    async createCustomer(
      @Param('id') id: string, // Recibe el ID como Path Variable
      @Query('name') fullname: string, // @RequestParam
      @Body() userData: { email: string }, // @RequestBody
    ): Promise<Customer> {
      const parsedId = parseInt(id, 10); // Convierte a número
      return this.customersService.createCustomer(fullname, userData.email);
    }
  
    @Get(':id') // Obtener un cliente por ID
    async getCustomer(@Param('id') id: string): Promise<Customer> {
      const parsedId = parseInt(id, 10); // Convierte a número
      return this.customersService.getCustomer(parsedId);
    }
  
    @Get() // Obtener todos los clientes
    async getAllCustomers(): Promise<Customer[]> {
      return this.customersService.getAllCustomers();
    }
  }
  