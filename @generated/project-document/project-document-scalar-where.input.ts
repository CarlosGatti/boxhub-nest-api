import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDocumentTypeFilter } from '../prisma/enum-document-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProjectDocumentScalarWhereInput {

    @Field(() => [ProjectDocumentScalarWhereInput], {nullable:true})
    AND?: Array<ProjectDocumentScalarWhereInput>;

    @Field(() => [ProjectDocumentScalarWhereInput], {nullable:true})
    OR?: Array<ProjectDocumentScalarWhereInput>;

    @Field(() => [ProjectDocumentScalarWhereInput], {nullable:true})
    NOT?: Array<ProjectDocumentScalarWhereInput>;

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
}
