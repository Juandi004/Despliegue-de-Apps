import { Module } from '@nestjs/common';
import { BallController } from './ball/ball.controller';
import { BallService } from './ball/ball.service';
import { PrismaService } from './prisma/prisma.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Module({
  imports: [],
  controllers: [BallController],
  providers: [BallService, PrismaService],
})
export class AppModule {
  configureSwagger(app) {
    const options = new DocumentBuilder()
      .setTitle('Mikasa Ball API')
      .setDescription('API to manage Mikasa ball products')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }
}
