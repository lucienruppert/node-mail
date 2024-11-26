import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MailService } from './mail.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const mailService = new MailService();
  await mailService.sendMail(
    'luciendelmar@gmail.com',
    'Hello from NestJS!',
    'This is a test email.',
  );
  await app.listen(3002);
}
bootstrap();
