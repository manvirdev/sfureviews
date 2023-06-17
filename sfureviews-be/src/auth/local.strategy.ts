import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from './users.service';
import { User } from './user.schema';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super();
  }

  async validate(email: string, password: string): Promise<User | undefined> {
    const user = await this.usersService.findByEmail(email);
    if (!user || user.password !== password) {
      return undefined;
    }
    return user;
  }
}
