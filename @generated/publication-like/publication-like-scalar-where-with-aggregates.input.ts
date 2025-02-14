import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PublicationLikeScalarWhereWithAggregatesInput {

    @Field(() => [PublicationLikeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PublicationLikeScalarWhereWithAggregatesInput>;

    @Field(() => [PublicationLikeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PublicationLikeScalarWhereWithAggregatesInput>;

    @Field(() => [PublicationLikeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PublicationLikeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    publicationId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
