import { Injectable } from '@nestjs/common';
import { CreatePptmmsbackendDto } from './dto/create-pptmmsbackend.dto';
import { UpdatePptmmsbackendDto } from './dto/update-pptmmsbackend.dto';

@Injectable()
export class PptmmsbackendService {
  create(createPptmmsbackendDto: CreatePptmmsbackendDto) {
    return 'This action adds a new pptmmsbackend';
  }

  findAll() {
    return `This action returns all pptmmsbackend`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pptmmsbackend`;
  }

  update(id: number, updatePptmmsbackendDto: UpdatePptmmsbackendDto) {
    return `This action updates a #${id} pptmmsbackend`;
  }

  remove(id: number) {
    return `This action removes a #${id} pptmmsbackend`;
  }
}
