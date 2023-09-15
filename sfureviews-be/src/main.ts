import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Getting the App modules and supplying it to NestFactory as argument
  // Can be made more platform specific by using type <NestExpressApplication> or <NestFastifyApplication>
  const app = await NestFactory.create(AppModule);
  // Starting the port
  await app.listen(3000);
}
bootstrap();
