import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { PermitInspectionUpdateWithoutProjectInput } from './permit-inspection-update-without-project.input';
import { PermitInspectionCreateWithoutProjectInput } from './permit-inspection-create-without-project.input';
export declare class PermitInspectionUpsertWithWhereUniqueWithoutProjectInput {
    where: Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>;
    update: PermitInspectionUpdateWithoutProjectInput;
    create: PermitInspectionCreateWithoutProjectInput;
}
