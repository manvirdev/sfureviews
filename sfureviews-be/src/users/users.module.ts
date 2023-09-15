import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from 'src/common/logger/logger.service';
import { UserController } from 'src/controllers/user.controller';
import { UserService } from './user.services';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, LoggerService],
  exports: [UserService]
})
export class UserModule {}
