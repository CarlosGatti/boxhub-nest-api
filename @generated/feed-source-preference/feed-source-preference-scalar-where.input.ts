import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FeedSourcePreferenceScalarWhereInput {

    @Field(() => [FeedSourcePreferenceScalarWhereInput], {nullable:true})
    AND?: Array<FeedSourcePreferenceScalarWhereInput>;

    @Field(() => [FeedSourcePreferenceScalarWhereInput], {nullable:true})
    OR?: Array<FeedSourcePreferenceScalarWhereInput>;

    @Field(() => [FeedSourcePreferenceScalarWhereInput], {nullable:true})
    NOT?: Array<FeedSourcePreferenceScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    sourceId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    notifyOnNew?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isMuted?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    mutedUntil?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    consecutiveSkips?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastInteractedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
