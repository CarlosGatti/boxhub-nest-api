import { ConstructionLogCreateWithoutProjectInput } from './construction-log-create-without-project.input';
import { ConstructionLogCreateOrConnectWithoutProjectInput } from './construction-log-create-or-connect-without-project.input';
import { ConstructionLogUpsertWithWhereUniqueWithoutProjectInput } from './construction-log-upsert-with-where-unique-without-project.input';
import { ConstructionLogCreateManyProjectInputEnvelope } from './construction-log-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { ConstructionLogUpdateWithWhereUniqueWithoutProjectInput } from './construction-log-update-with-where-unique-without-project.input';
import { ConstructionLogUpdateManyWithWhereWithoutProjectInput } from './construction-log-update-many-with-where-without-project.input';
import { ConstructionLogScalarWhereInput } from './construction-log-scalar-where.input';
export declare class ConstructionLogUpdateManyWithoutProjectNestedInput {
    create?: Array<ConstructionLogCreateWithoutProjectInput>;
    connectOrCreate?: Array<ConstructionLogCreateOrConnectWithoutProjectInput>;
    upsert?: Array<ConstructionLogUpsertWithWhereUniqueWithoutProjectInput>;
    createMany?: ConstructionLogCreateManyProjectInputEnvelope;
    set?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;
    update?: Array<ConstructionLogUpdateWithWhereUniqueWithoutProjectInput>;
    updateMany?: Array<ConstructionLogUpdateManyWithWhereWithoutProjectInput>;
    deleteMany?: Array<ConstructionLogScalarWhereInput>;
}
