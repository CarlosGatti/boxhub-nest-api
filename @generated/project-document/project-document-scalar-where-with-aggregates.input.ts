import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumDocumentTypeWithAggregatesFilter } from '../prisma/enum-document-type-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProjectDocumentScalarWhereWithAggregatesInput {

    @Field(() => [ProjectDocumentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProjectDocumentScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectDocumentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProjectDocumentScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectDocumentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProjectDocumentScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    projectId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fileUrl?: StringWithAggregatesFilter;

    @Field(() => EnumDocumentTypeWithAggregatesFilter, {nullable:true})
    type?: EnumDocumentTypeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
