import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const PORT = environment.port || 4300;
const HOST = environment.host || '127.0.0.1';
const HOST_URL = new URL(`http://${HOST}:${PORT}`);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    methods: 'GET',
    maxAge: 3600
  });

  await app.listen(PORT);
}

bootstrap()
  .then(() => {
    Logger.log(`[API] Server listening on ${HOST_URL.href}`);
  })
  .catch(error => {
    Logger.error(error);
  });
