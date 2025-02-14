import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PublicationCommentScalarWhereWithAggregatesInput {

    @Field(() => [PublicationCommentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PublicationCommentScalarWhereWithAggregatesInput>;

    @Field(() => [PublicationCommentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PublicationCommentScalarWhereWithAggregatesInput>;

    @Field(() => [PublicationCommentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PublicationCommentScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    publicationId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
