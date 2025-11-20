import { PermitInspectionCreateWithoutProjectInput } from './permit-inspection-create-without-project.input';
import { PermitInspectionCreateOrConnectWithoutProjectInput } from './permit-inspection-create-or-connect-without-project.input';
import { PermitInspectionUpsertWithWhereUniqueWithoutProjectInput } from './permit-inspection-upsert-with-where-unique-without-project.input';
import { PermitInspectionCreateManyProjectInputEnvelope } from './permit-inspection-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { PermitInspectionUpdateWithWhereUniqueWithoutProjectInput } from './permit-inspection-update-with-where-unique-without-project.input';
import { PermitInspectionUpdateManyWithWhereWithoutProjectInput } from './permit-inspection-update-many-with-where-without-project.input';
import { PermitInspectionScalarWhereInput } from './permit-inspection-scalar-where.input';
export declare class PermitInspectionUpdateManyWithoutProjectNestedInput {
    create?: Array<PermitInspectionCreateWithoutProjectInput>;
    connectOrCreate?: Array<PermitInspectionCreateOrConnectWithoutProjectInput>;
    upsert?: Array<PermitInspectionUpsertWithWhereUniqueWithoutProjectInput>;
    createMany?: PermitInspectionCreateManyProjectInputEnvelope;
    set?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;
    update?: Array<PermitInspectionUpdateWithWhereUniqueWithoutProjectInput>;
    updateMany?: Array<PermitInspectionUpdateManyWithWhereWithoutProjectInput>;
    deleteMany?: Array<PermitInspectionScalarWhereInput>;
}
