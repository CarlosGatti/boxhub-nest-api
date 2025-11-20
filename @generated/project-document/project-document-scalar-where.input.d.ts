import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDocumentTypeFilter } from '../prisma/enum-document-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class ProjectDocumentScalarWhereInput {
    AND?: Array<ProjectDocumentScalarWhereInput>;
    OR?: Array<ProjectDocumentScalarWhereInput>;
    NOT?: Array<ProjectDocumentScalarWhereInput>;
    id?: IntFilter;
    projectId?: IntFilter;
    name?: StringFilter;
    fileUrl?: StringFilter;
    type?: EnumDocumentTypeFilter;
    createdAt?: DateTimeFilter;
}
