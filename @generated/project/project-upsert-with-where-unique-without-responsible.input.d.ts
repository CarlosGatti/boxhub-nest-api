import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutResponsibleInput } from './project-update-without-responsible.input';
import { ProjectCreateWithoutResponsibleInput } from './project-create-without-responsible.input';
export declare class ProjectUpsertWithWhereUniqueWithoutResponsibleInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
    update: ProjectUpdateWithoutResponsibleInput;
    create: ProjectCreateWithoutResponsibleInput;
}
