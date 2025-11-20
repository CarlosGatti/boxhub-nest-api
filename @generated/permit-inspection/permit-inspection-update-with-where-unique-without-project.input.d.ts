import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { PermitInspectionUpdateWithoutProjectInput } from './permit-inspection-update-without-project.input';
export declare class PermitInspectionUpdateWithWhereUniqueWithoutProjectInput {
    where: Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>;
    data: PermitInspectionUpdateWithoutProjectInput;
}
