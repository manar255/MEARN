import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import SignUpDto from './dtos/signUp.dto';
import SignInDto from './dtos/signIn.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService :AuthService){}


    @Post()
    signUP(@Body() userData:SignUpDto ){
        console.log(userData)
        return this.authService.signUp(userData);
    }

    @Post('/signIn')
    async signIn(@Body() userData:SignInDto){
        return await this.authService.signIn(userData);
    }
}
