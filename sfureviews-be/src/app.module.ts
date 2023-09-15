import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { MongoModule } from './modules/mongo.module';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [MongoModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
