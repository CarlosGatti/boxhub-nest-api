import { PermitKind } from '../prisma/permit-kind.enum';
import { PermitStatus } from '../prisma/permit-status.enum';
import { UserCreateNestedOneWithoutResponsibleInspectionsInput } from '../user/user-create-nested-one-without-responsible-inspections.input';
export declare class PermitInspectionCreateWithoutProjectInput {
    number: string;
    kind: keyof typeof PermitKind;
    status?: keyof typeof PermitStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string;
    fileUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    responsible?: UserCreateNestedOneWithoutResponsibleInspectionsInput;
}
