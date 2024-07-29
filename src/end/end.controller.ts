import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EndService } from './end.service';
import { CreateEndDto } from './dto/create-end.dto';
import { UpdateEndDto } from './dto/update-end.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { UserEmail } from '../common/decorators/user-email.decorator';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('End')
@Controller('end')
export class EndController {
  constructor(private readonly endService: EndService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'To Add a new task wrt to the user email.',
    summary: 'Add a new Task.',
  })
  @Post()
  async create(
    @Body() createTodoDto: CreateEndDto,
    @UserEmail()
    userEmail: string,
  ) {
    console.log('output');
    return await this.endService.create(CreateEndDto, userEmail);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'To get all the user tasks.',
    summary: 'To get all the user tasks.',
  })
  @Get()
  async findAll(
    @UserEmail()
    userEmail: string,
  ) {
    console.log(userEmail);
    return await this.endService.findAll(userEmail);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'To get a specific the user task.',
    summary: 'To get a specific the user task.',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.endService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'To update a specific the user task.',
    summary: 'To update a specific the user task.',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEndDto: UpdateEndDto) {
    return this.endService.update(+id, updateEndDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'To delete a specific the user task.',
    summary: 'To delete a specific the user task.',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.endService.remove(+id);
  }
}
