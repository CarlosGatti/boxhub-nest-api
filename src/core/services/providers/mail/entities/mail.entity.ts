import { IMailSendDTO } from "../dto/mail.dto";

interface MailEntity {
    send({ path, subject, to, variables, attachments }: IMailSendDTO): Promise<boolean>
}

export { MailEntity }