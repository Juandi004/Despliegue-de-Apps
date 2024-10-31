import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  get ball() {
    return this.prisma.ball;
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }
}
