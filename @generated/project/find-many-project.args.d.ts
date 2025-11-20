import { ProjectWhereInput } from './project-where.input';
import { ProjectOrderByWithRelationInput } from './project-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectScalarFieldEnum } from './project-scalar-field.enum';
export declare class FindManyProjectArgs {
    where?: ProjectWhereInput;
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}
