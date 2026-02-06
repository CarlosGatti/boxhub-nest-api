import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectListRelationFilter } from '../review-card-project/review-card-project-list-relation-filter.input';

@InputType()
export class ReviewCardBusinessWhereInput {

    @Field(() => [ReviewCardBusinessWhereInput], {nullable:true})
    AND?: Array<ReviewCardBusinessWhereInput>;

    @Field(() => [ReviewCardBusinessWhereInput], {nullable:true})
    OR?: Array<ReviewCardBusinessWhereInput>;

    @Field(() => [ReviewCardBusinessWhereInput], {nullable:true})
    NOT?: Array<ReviewCardBusinessWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    placeId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    googleReviewUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    website?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => ReviewCardProjectListRelationFilter, {nullable:true})
    projects?: ReviewCardProjectListRelationFilter;
}
