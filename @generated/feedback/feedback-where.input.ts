import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { EnumFeedbackStatusFilter } from '../prisma/enum-feedback-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AppRelationFilter } from '../app/app-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedbackWhereInput {

    @Field(() => [FeedbackWhereInput], {nullable:true})
    AND?: Array<FeedbackWhereInput>;

    @Field(() => [FeedbackWhereInput], {nullable:true})
    OR?: Array<FeedbackWhereInput>;

    @Field(() => [FeedbackWhereInput], {nullable:true})
    NOT?: Array<FeedbackWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    targetAppId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    anonymousId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contactEmail?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    rating?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    message?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contextPath?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => EnumFeedbackStatusFilter, {nullable:true})
    status?: EnumFeedbackStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => AppRelationFilter, {nullable:true})
    targetApp?: AppRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    user?: UserNullableRelationFilter;
}
