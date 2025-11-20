import { ProjectDocumentWhereInput } from './project-document-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDocumentTypeFilter } from '../prisma/enum-document-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';
export declare class ProjectDocumentWhereUniqueInput {
    id?: number;
    AND?: Array<ProjectDocumentWhereInput>;
    OR?: Array<ProjectDocumentWhereInput>;
    NOT?: Array<ProjectDocumentWhereInput>;
    projectId?: IntFilter;
    name?: StringFilter;
    fileUrl?: StringFilter;
    type?: EnumDocumentTypeFilter;
    createdAt?: DateTimeFilter;
    project?: ProjectRelationFilter;
}
