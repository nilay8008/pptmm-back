import { PartialType } from '@nestjs/swagger';
import { CreatePptmmsbackendDto } from './create-pptmmsbackend.dto';

export class UpdatePptmmsbackendDto extends PartialType(CreatePptmmsbackendDto) {}
