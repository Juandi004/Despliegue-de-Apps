import { Module } from '@nestjs/common';
import { CustomersModule } from './customer/customer.module'; // Asegúrate de la ruta correcta

@Module({
  imports: [CustomersModule],
})
export class AppModule {}
