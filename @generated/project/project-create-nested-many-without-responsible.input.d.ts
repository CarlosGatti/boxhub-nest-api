import { ProjectCreateWithoutResponsibleInput } from './project-create-without-responsible.input';
import { ProjectCreateOrConnectWithoutResponsibleInput } from './project-create-or-connect-without-responsible.input';
import { ProjectCreateManyResponsibleInputEnvelope } from './project-create-many-responsible-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
export declare class ProjectCreateNestedManyWithoutResponsibleInput {
    create?: Array<ProjectCreateWithoutResponsibleInput>;
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutResponsibleInput>;
    createMany?: ProjectCreateManyResponsibleInputEnvelope;
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
}
