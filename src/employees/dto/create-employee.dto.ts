import { IsString, MaxLength } from 'class-validator';

export class CreateEmployeeDto {
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
