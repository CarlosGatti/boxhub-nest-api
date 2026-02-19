import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionBoardUserIdYearCompoundUniqueInput } from './bucket-vision-board-user-id-year-compound-unique.input';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumBucketVisionPeriodTypeFilter } from '../prisma/enum-bucket-vision-period-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumBucketVisionLayoutModeFilter } from '../prisma/enum-bucket-vision-layout-mode-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { BucketVisionSectionListRelationFilter } from '../bucket-vision-section/bucket-vision-section-list-relation-filter.input';
import { BucketVisionItemListRelationFilter } from '../bucket-vision-item/bucket-vision-item-list-relation-filter.input';
import { BucketVisionGoalLinkListRelationFilter } from '../bucket-vision-goal-link/bucket-vision-goal-link-list-relation-filter.input';
import { BucketVisionCheckinListRelationFilter } from '../bucket-vision-checkin/bucket-vision-checkin-list-relation-filter.input';

@InputType()
export class BucketVisionBoardWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => BucketVisionBoardUserIdYearCompoundUniqueInput, {nullable:true})
    userId_year?: BucketVisionBoardUserIdYearCompoundUniqueInput;

    @Field(() => [BucketVisionBoardWhereInput], {nullable:true})
    AND?: Array<BucketVisionBoardWhereInput>;

    @Field(() => [BucketVisionBoardWhereInput], {nullable:true})
    OR?: Array<BucketVisionBoardWhereInput>;

    @Field(() => [BucketVisionBoardWhereInput], {nullable:true})
    NOT?: Array<BucketVisionBoardWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => BucketVisionSectionListRelationFilter, {nullable:true})
    sections?: BucketVisionSectionListRelationFilter;

    @Field(() => BucketVisionItemListRelationFilter, {nullable:true})
    items?: BucketVisionItemListRelationFilter;

    @Field(() => BucketVisionGoalLinkListRelationFilter, {nullable:true})
    goalLinks?: BucketVisionGoalLinkListRelationFilter;

    @Field(() => BucketVisionCheckinListRelationFilter, {nullable:true})
    checkins?: BucketVisionCheckinListRelationFilter;
}
