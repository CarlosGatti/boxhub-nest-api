import { ProjectUpdateWithoutPermitsInput } from './project-update-without-permits.input';
import { ProjectCreateWithoutPermitsInput } from './project-create-without-permits.input';
import { ProjectWhereInput } from './project-where.input';
export declare class ProjectUpsertWithoutPermitsInput {
    update: ProjectUpdateWithoutPermitsInput;
    create: ProjectCreateWithoutPermitsInput;
    where?: ProjectWhereInput;
}
