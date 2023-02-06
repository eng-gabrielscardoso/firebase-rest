import { PartialType } from '@nestjs/mapped-types';
import { IsString, Length } from 'class-validator';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
  @IsString()
  @Length(5, 255)
  company?: string;
  @IsString()
  @Length(5, 255)
  email?: string;
  @IsString()
  @Length(5, 255)
  name?: string;
}
