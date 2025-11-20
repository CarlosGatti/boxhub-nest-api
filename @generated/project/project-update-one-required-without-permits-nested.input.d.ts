import { ProjectCreateWithoutPermitsInput } from './project-create-without-permits.input';
import { ProjectCreateOrConnectWithoutPermitsInput } from './project-create-or-connect-without-permits.input';
import { ProjectUpsertWithoutPermitsInput } from './project-upsert-without-permits.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutPermitsInput } from './project-update-to-one-with-where-without-permits.input';
export declare class ProjectUpdateOneRequiredWithoutPermitsNestedInput {
    create?: ProjectCreateWithoutPermitsInput;
    connectOrCreate?: ProjectCreateOrConnectWithoutPermitsInput;
    upsert?: ProjectUpsertWithoutPermitsInput;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
    update?: ProjectUpdateToOneWithWhereWithoutPermitsInput;
}
