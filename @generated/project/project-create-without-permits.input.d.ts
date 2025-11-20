import { ProjectStatus } from '../prisma/project-status.enum';
import { UserCreateNestedOneWithoutProjectResponsibleInput } from '../user/user-create-nested-one-without-project-responsible.input';
import { ConstructionLogCreateNestedManyWithoutProjectInput } from '../construction-log/construction-log-create-nested-many-without-project.input';
import { ProjectDocumentCreateNestedManyWithoutProjectInput } from '../project-document/project-document-create-nested-many-without-project.input';
import { MaterialEntryCreateNestedManyWithoutProjectInput } from '../material-entry/material-entry-create-nested-many-without-project.input';
import { ProjectPhotoCreateNestedManyWithoutProjectInput } from '../project-photo/project-photo-create-nested-many-without-project.input';
export declare class ProjectCreateWithoutPermitsInput {
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
    materials?: MaterialEntryCreateNestedManyWithoutProjectInput;
    photos?: ProjectPhotoCreateNestedManyWithoutProjectInput;
}
