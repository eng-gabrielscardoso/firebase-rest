import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeFirebase } from 'config/firebase.config';

initializeFirebase();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get('DEVELOPMENT_BASE_PORT') || 3000;
  await app.enableCors();
  await app.listen(port);
}
bootstrap();
