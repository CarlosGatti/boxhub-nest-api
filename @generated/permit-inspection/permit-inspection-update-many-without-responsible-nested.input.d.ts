import { PermitInspectionCreateWithoutResponsibleInput } from './permit-inspection-create-without-responsible.input';
import { PermitInspectionCreateOrConnectWithoutResponsibleInput } from './permit-inspection-create-or-connect-without-responsible.input';
import { PermitInspectionUpsertWithWhereUniqueWithoutResponsibleInput } from './permit-inspection-upsert-with-where-unique-without-responsible.input';
import { PermitInspectionCreateManyResponsibleInputEnvelope } from './permit-inspection-create-many-responsible-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { PermitInspectionUpdateWithWhereUniqueWithoutResponsibleInput } from './permit-inspection-update-with-where-unique-without-responsible.input';
import { PermitInspectionUpdateManyWithWhereWithoutResponsibleInput } from './permit-inspection-update-many-with-where-without-responsible.input';
import { PermitInspectionScalarWhereInput } from './permit-inspection-scalar-where.input';
export declare class PermitInspectionUpdateManyWithoutResponsibleNestedInput {
    create?: Array<PermitInspectionCreateWithoutResponsibleInput>;
    connectOrCreate?: Array<PermitInspectionCreateOrConnectWithoutResponsibleInput>;
    upsert?: Array<PermitInspectionUpsertWithWhereUniqueWithoutResponsibleInput>;
    createMany?: PermitInspectionCreateManyResponsibleInputEnvelope;
    set?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;
    update?: Array<PermitInspectionUpdateWithWhereUniqueWithoutResponsibleInput>;
    updateMany?: Array<PermitInspectionUpdateManyWithWhereWithoutResponsibleInput>;
    deleteMany?: Array<PermitInspectionScalarWhereInput>;
}
