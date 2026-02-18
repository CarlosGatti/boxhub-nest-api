import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumBucketMediaTypeFilter } from '../prisma/enum-bucket-media-type-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BucketGoalMediaScalarWhereInput {

    @Field(() => [BucketGoalMediaScalarWhereInput], {nullable:true})
    AND?: Array<BucketGoalMediaScalarWhereInput>;

    @Field(() => [BucketGoalMediaScalarWhereInput], {nullable:true})
    OR?: Array<BucketGoalMediaScalarWhereInput>;

    @Field(() => [BucketGoalMediaScalarWhereInput], {nullable:true})
    NOT?: Array<BucketGoalMediaScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    goalId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    logId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => EnumBucketMediaTypeFilter, {nullable:true})
    type?: EnumBucketMediaTypeFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
