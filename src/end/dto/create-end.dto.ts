import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEndDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  task: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string;
}
