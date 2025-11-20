import { ProjectCreateWithoutLogsInput } from './project-create-without-logs.input';
import { ProjectCreateOrConnectWithoutLogsInput } from './project-create-or-connect-without-logs.input';
import { ProjectUpsertWithoutLogsInput } from './project-upsert-without-logs.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutLogsInput } from './project-update-to-one-with-where-without-logs.input';
export declare class ProjectUpdateOneRequiredWithoutLogsNestedInput {
    create?: ProjectCreateWithoutLogsInput;
    connectOrCreate?: ProjectCreateOrConnectWithoutLogsInput;
    upsert?: ProjectUpsertWithoutLogsInput;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
    update?: ProjectUpdateToOneWithWhereWithoutLogsInput;
}
