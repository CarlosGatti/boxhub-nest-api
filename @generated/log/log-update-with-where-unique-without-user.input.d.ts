import { Prisma } from '@prisma/client';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogUpdateWithoutUserInput } from './log-update-without-user.input';
export declare class LogUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<LogWhereUniqueInput, 'id'>;
    data: LogUpdateWithoutUserInput;
}
