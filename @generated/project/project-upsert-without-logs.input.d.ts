import { ProjectUpdateWithoutLogsInput } from './project-update-without-logs.input';
import { ProjectCreateWithoutLogsInput } from './project-create-without-logs.input';
import { ProjectWhereInput } from './project-where.input';
export declare class ProjectUpsertWithoutLogsInput {
    update: ProjectUpdateWithoutLogsInput;
    create: ProjectCreateWithoutLogsInput;
    where?: ProjectWhereInput;
}
