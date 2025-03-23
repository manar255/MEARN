import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import AuthDto from './auth.dto';
import { ApiProperty } from '@nestjs/swagger';

export default class SignUpDto extends AuthDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  @Min(16)
  @Max(60)
  age: number;

  @ApiProperty()
  @MinLength(8, { message: 'Phone number must be at least 8 characters long' })
  @IsAlphanumeric()
  phone: string;
}
