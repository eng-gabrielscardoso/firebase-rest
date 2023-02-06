import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateEmployeeDto {
  @IsUUID()
  @IsNotEmpty()
  employeeId: string;
  @IsString()
  @Length(5, 255)
  @IsNotEmpty()
  company: string;
  @IsString()
  @Length(5, 255)
  @IsNotEmpty()
  email: string;
  @IsString()
  @Length(5, 255)
  @IsNotEmpty()
  name: string;
}
