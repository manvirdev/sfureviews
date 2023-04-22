import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoConfig from '../../config/mongo.config';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.uri, {
      useNewUrlParser: mongoConfig.useNewUrlParser,
      useUnifiedTopology: mongoConfig.useUnifiedTopology,
    }),
  ],
})
export class MongoModule {}
