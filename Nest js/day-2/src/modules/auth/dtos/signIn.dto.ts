import { ApiProperty } from "@nestjs/swagger";
import AuthDto from "./auth.dto";
import { IsAlphanumeric, IsEmail, Min } from "class-validator";

export default class SignInDto extends AuthDto {
   
}