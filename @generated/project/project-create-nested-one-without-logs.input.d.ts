import { ProjectCreateWithoutLogsInput } from './project-create-without-logs.input';
import { ProjectCreateOrConnectWithoutLogsInput } from './project-create-or-connect-without-logs.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
export declare class ProjectCreateNestedOneWithoutLogsInput {
    create?: ProjectCreateWithoutLogsInput;
    connectOrCreate?: ProjectCreateOrConnectWithoutLogsInput;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
