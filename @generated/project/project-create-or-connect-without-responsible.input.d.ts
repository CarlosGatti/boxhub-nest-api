import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectCreateWithoutResponsibleInput } from './project-create-without-responsible.input';
export declare class ProjectCreateOrConnectWithoutResponsibleInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
    create: ProjectCreateWithoutResponsibleInput;
}
