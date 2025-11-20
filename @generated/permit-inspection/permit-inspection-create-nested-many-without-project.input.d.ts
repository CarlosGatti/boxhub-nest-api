import { PermitInspectionCreateWithoutProjectInput } from './permit-inspection-create-without-project.input';
import { PermitInspectionCreateOrConnectWithoutProjectInput } from './permit-inspection-create-or-connect-without-project.input';
import { PermitInspectionCreateManyProjectInputEnvelope } from './permit-inspection-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
export declare class PermitInspectionCreateNestedManyWithoutProjectInput {
    create?: Array<PermitInspectionCreateWithoutProjectInput>;
    connectOrCreate?: Array<PermitInspectionCreateOrConnectWithoutProjectInput>;
    createMany?: PermitInspectionCreateManyProjectInputEnvelope;
    connect?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;
}
