import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PptmmsbackendService } from './pptmmsbackend.service';
import { CreatePptmmsbackendDto } from './dto/create-pptmmsbackend.dto';
import { UpdatePptmmsbackendDto } from './dto/update-pptmmsbackend.dto';

@Controller('pptmmsbackend')
export class PptmmsbackendController {
  constructor(private readonly pptmmsbackendService: PptmmsbackendService) {}

  @Post()
  create(@Body() createPptmmsbackendDto: CreatePptmmsbackendDto) {
    return this.pptmmsbackendService.create(createPptmmsbackendDto);
  }

  @Get()
  findAll() {
    return this.pptmmsbackendService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pptmmsbackendService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePptmmsbackendDto: UpdatePptmmsbackendDto) {
    return this.pptmmsbackendService.update(+id, updatePptmmsbackendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pptmmsbackendService.remove(+id);
  }
}
