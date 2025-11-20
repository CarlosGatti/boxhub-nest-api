import { Prisma } from '@prisma/client';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogUpdateWithoutUserInput } from './log-update-without-user.input';
import { LogCreateWithoutUserInput } from './log-create-without-user.input';
export declare class LogUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<LogWhereUniqueInput, 'id'>;
    update: LogUpdateWithoutUserInput;
    create: LogCreateWithoutUserInput;
}
