import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { log } from 'node:console';

@Injectable()
export class HttpMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    
    const customHeader =req.headers['customheader']
    console.log(req.headers)
    if(customHeader!=process.env.CUSTOMHEADER){
    console.log(process.env.CUSTOMHEADER)
    throw new ForbiddenException();
    }
    next();
  }
}