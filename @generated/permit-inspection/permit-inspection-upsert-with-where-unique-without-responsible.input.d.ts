import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { PermitInspectionUpdateWithoutResponsibleInput } from './permit-inspection-update-without-responsible.input';
import { PermitInspectionCreateWithoutResponsibleInput } from './permit-inspection-create-without-responsible.input';
export declare class PermitInspectionUpsertWithWhereUniqueWithoutResponsibleInput {
    where: Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>;
    update: PermitInspectionUpdateWithoutResponsibleInput;
    create: PermitInspectionCreateWithoutResponsibleInput;
}
