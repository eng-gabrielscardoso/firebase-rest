import { PartialType } from '@nestjs/mapped-types';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';
import { CreateRecipientDto } from './create-recipient.dto';

export class UpdateRecipientDto extends PartialType(CreateRecipientDto) {
  @IsArray()
  childs: Array<string>;
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  legal_person_address_office: string;
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  legal_person_country: string;
  @IsEmail()
  @IsNotEmpty()
  @Length(5, 255)
  natural_person_email: string;
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  natural_person_phone: string;
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  natural_person_position: string;
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  password: string;
}
