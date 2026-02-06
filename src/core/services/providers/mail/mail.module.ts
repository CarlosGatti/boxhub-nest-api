import { MailResolver } from './mail.resolver';
import { MailService } from './mail.service';
import { Module } from '@nestjs/common';

@Module({
    controllers: [MailResolver],
    providers: [MailService],
    exports: [MailService],
})
export class MailModule { }

