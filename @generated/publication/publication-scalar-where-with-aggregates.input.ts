import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumVisibilityWithAggregatesFilter } from '../prisma/enum-visibility-with-aggregates-filter.input';

@InputType()
export class PublicationScalarWhereWithAggregatesInput {

    @Field(() => [PublicationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PublicationScalarWhereWithAggregatesInput>;

    @Field(() => [PublicationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PublicationScalarWhereWithAggregatesInput>;

    @Field(() => [PublicationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PublicationScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    published?: BoolWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    postId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumVisibilityWithAggregatesFilter, {nullable:true})
    visibility?: EnumVisibilityWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    eventId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    communityId?: IntNullableWithAggregatesFilter;
}
