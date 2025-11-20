import { ConstructionLogCreateWithoutProjectInput } from './construction-log-create-without-project.input';
import { ConstructionLogCreateOrConnectWithoutProjectInput } from './construction-log-create-or-connect-without-project.input';
import { ConstructionLogCreateManyProjectInputEnvelope } from './construction-log-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
export declare class ConstructionLogCreateNestedManyWithoutProjectInput {
    create?: Array<ConstructionLogCreateWithoutProjectInput>;
    connectOrCreate?: Array<ConstructionLogCreateOrConnectWithoutProjectInput>;
    createMany?: ConstructionLogCreateManyProjectInputEnvelope;
    connect?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;
}
