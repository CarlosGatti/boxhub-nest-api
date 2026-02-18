import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumBucketPinSourceFilter } from '../prisma/enum-bucket-pin-source-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BucketGoalRelationFilter } from '../bucket-goal/bucket-goal-relation-filter.input';

@InputType()
export class BucketGoalPinWhereInput {

    @Field(() => [BucketGoalPinWhereInput], {nullable:true})
    AND?: Array<BucketGoalPinWhereInput>;

    @Field(() => [BucketGoalPinWhereInput], {nullable:true})
    OR?: Array<BucketGoalPinWhereInput>;

    @Field(() => [BucketGoalPinWhereInput], {nullable:true})
    NOT?: Array<BucketGoalPinWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    goalId?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    lat?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    lng?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    label?: StringNullableFilter;

    @Field(() => EnumBucketPinSourceFilter, {nullable:true})
    source?: EnumBucketPinSourceFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    placeId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    raw?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BucketGoalRelationFilter, {nullable:true})
    goal?: BucketGoalRelationFilter;
}
