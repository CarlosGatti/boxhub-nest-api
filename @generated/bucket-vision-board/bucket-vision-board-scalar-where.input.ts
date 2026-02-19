import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumBucketVisionPeriodTypeFilter } from '../prisma/enum-bucket-vision-period-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumBucketVisionLayoutModeFilter } from '../prisma/enum-bucket-vision-layout-mode-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BucketVisionBoardScalarWhereInput {

    @Field(() => [BucketVisionBoardScalarWhereInput], {nullable:true})
    AND?: Array<BucketVisionBoardScalarWhereInput>;

    @Field(() => [BucketVisionBoardScalarWhereInput], {nullable:true})
    OR?: Array<BucketVisionBoardScalarWhereInput>;

    @Field(() => [BucketVisionBoardScalarWhereInput], {nullable:true})
    NOT?: Array<BucketVisionBoardScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => EnumBucketVisionPeriodTypeFilter, {nullable:true})
    periodType?: EnumBucketVisionPeriodTypeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    year?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    periodKey?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    startDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endDate?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    theme?: StringNullableFilter;

    @Field(() => EnumBucketVisionLayoutModeFilter, {nullable:true})
    layoutMode?: EnumBucketVisionLayoutModeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    coverUrl?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
