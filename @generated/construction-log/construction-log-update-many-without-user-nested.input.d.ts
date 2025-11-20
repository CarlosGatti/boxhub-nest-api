import { ConstructionLogCreateWithoutUserInput } from './construction-log-create-without-user.input';
import { ConstructionLogCreateOrConnectWithoutUserInput } from './construction-log-create-or-connect-without-user.input';
import { ConstructionLogUpsertWithWhereUniqueWithoutUserInput } from './construction-log-upsert-with-where-unique-without-user.input';
import { ConstructionLogCreateManyUserInputEnvelope } from './construction-log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { ConstructionLogUpdateWithWhereUniqueWithoutUserInput } from './construction-log-update-with-where-unique-without-user.input';
import { ConstructionLogUpdateManyWithWhereWithoutUserInput } from './construction-log-update-many-with-where-without-user.input';
import { ConstructionLogScalarWhereInput } from './construction-log-scalar-where.input';
export declare class ConstructionLogUpdateManyWithoutUserNestedInput {
    create?: Array<ConstructionLogCreateWithoutUserInput>;
    connectOrCreate?: Array<ConstructionLogCreateOrConnectWithoutUserInput>;
    upsert?: Array<ConstructionLogUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: ConstructionLogCreateManyUserInputEnvelope;
    set?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;
    update?: Array<ConstructionLogUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<ConstructionLogUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<ConstructionLogScalarWhereInput>;
}
