import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardScanEventWhereInput } from './review-card-scan-event-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ReviewCardProjectRelationFilter } from '../review-card-project/review-card-project-relation-filter.input';

@InputType()
export class ReviewCardScanEventWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ReviewCardScanEventWhereInput], {nullable:true})
    AND?: Array<ReviewCardScanEventWhereInput>;

    @Field(() => [ReviewCardScanEventWhereInput], {nullable:true})
    OR?: Array<ReviewCardScanEventWhereInput>;

    @Field(() => [ReviewCardScanEventWhereInput], {nullable:true})
    NOT?: Array<ReviewCardScanEventWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ipHash?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userAgent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    referer?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ReviewCardProjectRelationFilter, {nullable:true})
    project?: ReviewCardProjectRelationFilter;
}
