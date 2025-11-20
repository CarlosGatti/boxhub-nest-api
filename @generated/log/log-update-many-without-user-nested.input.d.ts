import { LogCreateWithoutUserInput } from './log-create-without-user.input';
import { LogCreateOrConnectWithoutUserInput } from './log-create-or-connect-without-user.input';
import { LogUpsertWithWhereUniqueWithoutUserInput } from './log-upsert-with-where-unique-without-user.input';
import { LogCreateManyUserInputEnvelope } from './log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogUpdateWithWhereUniqueWithoutUserInput } from './log-update-with-where-unique-without-user.input';
import { LogUpdateManyWithWhereWithoutUserInput } from './log-update-many-with-where-without-user.input';
import { LogScalarWhereInput } from './log-scalar-where.input';
export declare class LogUpdateManyWithoutUserNestedInput {
    create?: Array<LogCreateWithoutUserInput>;
    connectOrCreate?: Array<LogCreateOrConnectWithoutUserInput>;
    upsert?: Array<LogUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: LogCreateManyUserInputEnvelope;
    set?: Array<Prisma.AtLeast<LogWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<LogWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<LogWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<LogWhereUniqueInput, 'id'>>;
    update?: Array<LogUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<LogUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<LogScalarWhereInput>;
}
