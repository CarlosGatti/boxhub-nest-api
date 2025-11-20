import { ProjectCreateWithoutPermitsInput } from './project-create-without-permits.input';
import { ProjectCreateOrConnectWithoutPermitsInput } from './project-create-or-connect-without-permits.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
export declare class ProjectCreateNestedOneWithoutPermitsInput {
    create?: ProjectCreateWithoutPermitsInput;
    connectOrCreate?: ProjectCreateOrConnectWithoutPermitsInput;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
