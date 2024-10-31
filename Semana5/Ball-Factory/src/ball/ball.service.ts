// ball.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBallDto } from './dto/create-ball.dto';
import { UpdateBallDto } from './dto/update-ball.dto';
import { Ball } from './ball.model';

@Injectable()
export class BallService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Ball[]> {
    return this.prisma.ball.findMany();
  }

  async findOne(id: number): Promise<Ball | null> {
    return this.prisma.ball.findUnique({
      where: { id },
    });
  }

  async create(data: CreateBallDto): Promise<Ball> {
    return this.prisma.ball.create({
      data: {
        type: data.type,
        description: data.description,
        price: data.price,
        stock: data.stock,
      },
    });
  }

  async update(id: number, data: UpdateBallDto): Promise<Ball | null> {
    const ball = await this.prisma.ball.findUnique({ where: { id } });
    if (!ball) {
      throw new NotFoundException(`Ball with ID ${id} not found`);
    }

    return this.prisma.ball.update({
      where: { id },
      data: {
        type: data.type,
        description: data.description,
        price: data.price,
        stock: data.stock,
      },
    });
  }

  async remove(id: number): Promise<Ball | null> {
    return this.prisma.ball.delete({
      where: { id },
    });
  }
}
