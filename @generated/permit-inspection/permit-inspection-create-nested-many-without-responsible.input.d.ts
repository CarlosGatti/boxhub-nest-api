import { PermitInspectionCreateWithoutResponsibleInput } from './permit-inspection-create-without-responsible.input';
import { PermitInspectionCreateOrConnectWithoutResponsibleInput } from './permit-inspection-create-or-connect-without-responsible.input';
import { PermitInspectionCreateManyResponsibleInputEnvelope } from './permit-inspection-create-many-responsible-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
export declare class PermitInspectionCreateNestedManyWithoutResponsibleInput {
    create?: Array<PermitInspectionCreateWithoutResponsibleInput>;
    connectOrCreate?: Array<PermitInspectionCreateOrConnectWithoutResponsibleInput>;
    createMany?: PermitInspectionCreateManyResponsibleInputEnvelope;
    connect?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;
}
