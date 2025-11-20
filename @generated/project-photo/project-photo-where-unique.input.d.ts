import { ProjectPhotoWhereInput } from './project-photo-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPhotoCategoryFilter } from '../prisma/enum-photo-category-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';
export declare class ProjectPhotoWhereUniqueInput {
    id?: number;
    AND?: Array<ProjectPhotoWhereInput>;
    OR?: Array<ProjectPhotoWhereInput>;
    NOT?: Array<ProjectPhotoWhereInput>;
    projectId?: IntFilter;
    caption?: StringNullableFilter;
    category?: EnumPhotoCategoryFilter;
    stage?: StringNullableFilter;
    imageUrl?: StringFilter;
    createdAt?: DateTimeFilter;
    project?: ProjectRelationFilter;
}
