import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { PermitInspectionUpdateWithoutResponsibleInput } from './permit-inspection-update-without-responsible.input';
export declare class PermitInspectionUpdateWithWhereUniqueWithoutResponsibleInput {
    where: Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>;
    data: PermitInspectionUpdateWithoutResponsibleInput;
}
