import { ProjectCreateWithoutMaterialsInput } from './project-create-without-materials.input';
import { ProjectCreateOrConnectWithoutMaterialsInput } from './project-create-or-connect-without-materials.input';
import { ProjectUpsertWithoutMaterialsInput } from './project-upsert-without-materials.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutMaterialsInput } from './project-update-to-one-with-where-without-materials.input';
export declare class ProjectUpdateOneRequiredWithoutMaterialsNestedInput {
    create?: ProjectCreateWithoutMaterialsInput;
    connectOrCreate?: ProjectCreateOrConnectWithoutMaterialsInput;
    upsert?: ProjectUpsertWithoutMaterialsInput;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
    update?: ProjectUpdateToOneWithWhereWithoutMaterialsInput;
}
