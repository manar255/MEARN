import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { log } from 'console';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('user')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class UserController {

    constructor(private userService:UserService){}

    @Get('/me')
    getCurrentUser(@Request() req:any){
        const userId = req.userId;
        return this.userService.getUserById(userId);
    }
    @Get('/other')
    getOtherUsers(@Request() req:any){
        const userId = req.userId;
        return this.userService.getOtherUsers(userId);
    }
}
