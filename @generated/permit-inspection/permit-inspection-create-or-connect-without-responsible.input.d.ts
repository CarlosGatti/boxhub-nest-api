import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { PermitInspectionCreateWithoutResponsibleInput } from './permit-inspection-create-without-responsible.input';
export declare class PermitInspectionCreateOrConnectWithoutResponsibleInput {
    where: Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>;
    create: PermitInspectionCreateWithoutResponsibleInput;
}
