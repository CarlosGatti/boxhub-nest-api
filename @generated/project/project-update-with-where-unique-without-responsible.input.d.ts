import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutResponsibleInput } from './project-update-without-responsible.input';
export declare class ProjectUpdateWithWhereUniqueWithoutResponsibleInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
    data: ProjectUpdateWithoutResponsibleInput;
}
