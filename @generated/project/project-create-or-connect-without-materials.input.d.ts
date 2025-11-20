import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectCreateWithoutMaterialsInput } from './project-create-without-materials.input';
export declare class ProjectCreateOrConnectWithoutMaterialsInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
    create: ProjectCreateWithoutMaterialsInput;
}
