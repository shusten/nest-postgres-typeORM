import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';

import { Users } from './user.entity';
import { UserDomain } from './user.domain';

@Controller('users')
export class UsersController {
    constructor( 
        private readonly usersService: UsersService
    ) {}

    @Get()
    async findAllUsers(@Res() response: Response) {
        const users = await this.usersService.findAllUsers()
        return response.status(200).json(users);
    }

    @Post()
    async createUser(@Res() response: Response, @Body() user: UserDomain) {
         const userCreated = await this.usersService.createUser(user);
        return response.status(201).json(userCreated);
    }
}
