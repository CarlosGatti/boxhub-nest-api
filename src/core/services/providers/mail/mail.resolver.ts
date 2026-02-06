import {
    ArgumentMetadata,
    Controller,
    forwardRef,
    Inject,
    Injectable,
    PipeTransform,
} from '@nestjs/common';
import { IMailSendDTO } from './dto/mail.dto';
import { MailService } from './mail.service';

@Controller()
export class MailResolver implements PipeTransform {
    constructor(
        @Inject(forwardRef(() => MailService))
        private readonly mailService: MailService,
    ) { }

    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, String, String];
        return !types.includes(metatype);
    }

    sendMail({ path, subject, to, variables, attachments }: IMailSendDTO) {
        return this.mailService.send({ path, subject, to, variables, attachments });
    }
}
