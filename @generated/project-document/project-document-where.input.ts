import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDocumentTypeFilter } from '../prisma/enum-document-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';

@InputType()
export class ProjectDocumentWhereInput {

    @Field(() => [ProjectDocumentWhereInput], {nullable:true})
    AND?: Array<ProjectDocumentWhereInput>;

    @Field(() => [ProjectDocumentWhereInput], {nullable:true})
    OR?: Array<ProjectDocumentWhereInput>;

    @Field(() => [ProjectDocumentWhereInput], {nullable:true})
    NOT?: Array<ProjectDocumentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fileUrl?: StringFilter;

    @Field(() => EnumDocumentTypeFilter, {nullable:true})
    type?: EnumDocumentTypeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: ProjectRelationFilter;
}
