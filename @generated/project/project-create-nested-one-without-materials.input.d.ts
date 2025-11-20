import { ProjectCreateWithoutMaterialsInput } from './project-create-without-materials.input';
import { ProjectCreateOrConnectWithoutMaterialsInput } from './project-create-or-connect-without-materials.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
export declare class ProjectCreateNestedOneWithoutMaterialsInput {
    create?: ProjectCreateWithoutMaterialsInput;
    connectOrCreate?: ProjectCreateOrConnectWithoutMaterialsInput;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
