import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectCreateWithoutPermitsInput } from './project-create-without-permits.input';
export declare class ProjectCreateOrConnectWithoutPermitsInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
    create: ProjectCreateWithoutPermitsInput;
}
