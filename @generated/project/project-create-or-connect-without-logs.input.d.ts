import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectCreateWithoutLogsInput } from './project-create-without-logs.input';
export declare class ProjectCreateOrConnectWithoutLogsInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
    create: ProjectCreateWithoutLogsInput;
}
