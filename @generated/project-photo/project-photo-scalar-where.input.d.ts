import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPhotoCategoryFilter } from '../prisma/enum-photo-category-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class ProjectPhotoScalarWhereInput {
    AND?: Array<ProjectPhotoScalarWhereInput>;
    OR?: Array<ProjectPhotoScalarWhereInput>;
    NOT?: Array<ProjectPhotoScalarWhereInput>;
    id?: IntFilter;
    projectId?: IntFilter;
    caption?: StringNullableFilter;
    category?: EnumPhotoCategoryFilter;
    stage?: StringNullableFilter;
    imageUrl?: StringFilter;
    createdAt?: DateTimeFilter;
}
