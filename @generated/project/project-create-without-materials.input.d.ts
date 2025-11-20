import { ProjectStatus } from '../prisma/project-status.enum';
import { UserCreateNestedOneWithoutProjectResponsibleInput } from '../user/user-create-nested-one-without-project-responsible.input';
import { ConstructionLogCreateNestedManyWithoutProjectInput } from '../construction-log/construction-log-create-nested-many-without-project.input';
import { ProjectDocumentCreateNestedManyWithoutProjectInput } from '../project-document/project-document-create-nested-many-without-project.input';
import { PermitInspectionCreateNestedManyWithoutProjectInput } from '../permit-inspection/permit-inspection-create-nested-many-without-project.input';
import { ProjectPhotoCreateNestedManyWithoutProjectInput } from '../project-photo/project-photo-create-nested-many-without-project.input';
export declare class ProjectCreateWithoutMaterialsInput {
    name: string;
    client: string;
    location: string;
    status?: keyof typeof ProjectStatus;
    startDate: Date | string;
    endDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    responsible: UserCreateNestedOneWithoutProjectResponsibleInput;
    logs?: ConstructionLogCreateNestedManyWithoutProjectInput;
    documents?: ProjectDocumentCreateNestedManyWithoutProjectInput;
    permits?: PermitInspectionCreateNestedManyWithoutProjectInput;
    photos?: ProjectPhotoCreateNestedManyWithoutProjectInput;
}
