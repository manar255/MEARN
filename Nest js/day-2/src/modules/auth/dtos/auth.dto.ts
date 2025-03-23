import { IsAlphanumeric, IsEmail, Min, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class AuthDto {
    @ApiProperty()
    @IsEmail({}, { message: 'Invalid email address' })
    email: string;

    @ApiProperty()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @IsAlphanumeric()
    password: string;

    
}
