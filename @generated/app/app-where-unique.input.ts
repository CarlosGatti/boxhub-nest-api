import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AppWhereInput } from './app-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserAppAccessListRelationFilter } from '../user-app-access/user-app-access-list-relation-filter.input';
import { FeedbackListRelationFilter } from '../feedback/feedback-list-relation-filter.input';

@InputType()
export class AppWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => [AppWhereInput], {nullable:true})
    AND?: Array<AppWhereInput>;

    @Field(() => [AppWhereInput], {nullable:true})
    OR?: Array<AppWhereInput>;

    @Field(() => [AppWhereInput], {nullable:true})
    NOT?: Array<AppWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserAppAccessListRelationFilter, {nullable:true})
    users?: UserAppAccessListRelationFilter;

    @Field(() => FeedbackListRelationFilter, {nullable:true})
    feedbacks?: FeedbackListRelationFilter;
}
