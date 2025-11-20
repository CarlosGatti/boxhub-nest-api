import { LogCreateWithoutUserInput } from './log-create-without-user.input';
import { LogCreateOrConnectWithoutUserInput } from './log-create-or-connect-without-user.input';
import { LogCreateManyUserInputEnvelope } from './log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogWhereUniqueInput } from './log-where-unique.input';
export declare class LogCreateNestedManyWithoutUserInput {
    create?: Array<LogCreateWithoutUserInput>;
    connectOrCreate?: Array<LogCreateOrConnectWithoutUserInput>;
    createMany?: LogCreateManyUserInputEnvelope;
    connect?: Array<Prisma.AtLeast<LogWhereUniqueInput, 'id'>>;
}
