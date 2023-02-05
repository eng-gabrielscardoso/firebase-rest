import { PartialType } from '@nestjs/mapped-types';
import { IsString, MaxLength } from 'class-validator';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
  @IsString()
  @MaxLength(255)
  company?: string;
  @IsString()
  @MaxLength(255)
  email?: string;
  @IsString()
  @MaxLength(255)
  name?: string;
}
