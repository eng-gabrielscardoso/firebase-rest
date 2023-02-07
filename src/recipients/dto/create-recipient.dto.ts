import {
  IsString,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  Length,
  IsArray,
  IsUUID,
} from 'class-validator';

export class CreateRecipientDto {
  @IsArray()
  childs: Array<string>;
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  legal_person_address_office: string;
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  legal_person_company_name: string;
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  legal_person_company_registration: string;
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  legal_person_country: string;
  @IsDateString()
  @IsNotEmpty()
  natural_person_birth_date: string;
  @IsEmail()
  @IsNotEmpty()
  @Length(5, 255)
  natural_person_email: string;
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  natural_person_name: string;
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  natural_person_phone: string;
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  natural_person_position: string;
  @IsUUID()
  parent_id: string;
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  password: string;
}
