import { Prisma } from '@prisma/client';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogCreateWithoutUserInput } from './log-create-without-user.input';
export declare class LogCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<LogWhereUniqueInput, 'id'>;
    create: LogCreateWithoutUserInput;
}
