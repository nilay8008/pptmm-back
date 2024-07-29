import { Injectable } from '@nestjs/common';
import { CreateEndDto } from './dto/create-end.dto';
import { UpdateEndDto } from './dto/update-end.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EndService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEndDto: CreateEndDto, email: string) {
    try {
      const user = await this.databaseService.user.findUnique({
        where: { email },
      });
      if (!user) {
        throw new Error('User not found');
      }
      const data: Prisma.EndCreateInput = {
        description: createEndDto.description,
        task: createEndDto.task,
        status: 'ACTIVE',
        user: {
          connect: { email: user.email },
        },
      };
      return this.databaseService.end.create({ data });
    } catch (err) {
      return err;
    }
  }

  async findAll(userEmail: string) {
    return  this.databaseService.end.findMany({
      where: {
        userEmail: userEmail,
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.end.findFirst({
      where:{
        id: id
      }
    })
  }

  async update(id: number, updateEndDto: UpdateEndDto) {
    return this.databaseService.end.update({
      where:{
        id:id
      },
      data: updateEndDto
    });
  }

  async remove(id: number) {
    return this.databaseService.end.delete({
      where:{
        id: id
      }
    });
  }
}