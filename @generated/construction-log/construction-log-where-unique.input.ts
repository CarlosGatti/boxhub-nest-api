import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ConstructionLogWhereInput } from './construction-log-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLogTypeFilter } from '../prisma/enum-log-type-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { LogCommentListRelationFilter } from '../log-comment/log-comment-list-relation-filter.input';

@InputType()
export class ConstructionLogWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ConstructionLogWhereInput], {nullable:true})
    AND?: Array<ConstructionLogWhereInput>;

    @Field(() => [ConstructionLogWhereInput], {nullable:true})
    OR?: Array<ConstructionLogWhereInput>;

    @Field(() => [ConstructionLogWhereInput], {nullable:true})
    NOT?: Array<ConstructionLogWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumLogTypeFilter, {nullable:true})
    type?: EnumLogTypeFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    images?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: ProjectRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => LogCommentListRelationFilter, {nullable:true})
    comments?: LogCommentListRelationFilter;
}
