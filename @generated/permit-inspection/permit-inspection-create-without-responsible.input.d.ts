import { PermitKind } from '../prisma/permit-kind.enum';
import { PermitStatus } from '../prisma/permit-status.enum';
import { ProjectCreateNestedOneWithoutPermitsInput } from '../project/project-create-nested-one-without-permits.input';
export declare class PermitInspectionCreateWithoutResponsibleInput {
    number: string;
    kind: keyof typeof PermitKind;
    status?: keyof typeof PermitStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string;
    fileUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: ProjectCreateNestedOneWithoutPermitsInput;
}
