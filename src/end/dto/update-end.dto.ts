import { PartialType } from '@nestjs/swagger';
import { CreateEndDto } from './create-end.dto';

export class UpdateEndDto extends PartialType(CreateEndDto) {}
