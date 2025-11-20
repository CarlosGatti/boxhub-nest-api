import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { PermitInspectionCreateWithoutProjectInput } from './permit-inspection-create-without-project.input';
export declare class PermitInspectionCreateOrConnectWithoutProjectInput {
    where: Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>;
    create: PermitInspectionCreateWithoutProjectInput;
}
