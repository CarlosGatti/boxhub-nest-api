import { ConstructionLogCreateWithoutUserInput } from './construction-log-create-without-user.input';
import { ConstructionLogCreateOrConnectWithoutUserInput } from './construction-log-create-or-connect-without-user.input';
import { ConstructionLogCreateManyUserInputEnvelope } from './construction-log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
export declare class ConstructionLogCreateNestedManyWithoutUserInput {
    create?: Array<ConstructionLogCreateWithoutUserInput>;
    connectOrCreate?: Array<ConstructionLogCreateOrConnectWithoutUserInput>;
    createMany?: ConstructionLogCreateManyUserInputEnvelope;
    connect?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;
}
