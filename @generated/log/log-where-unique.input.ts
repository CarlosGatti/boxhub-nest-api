import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LogWhereInput } from './log-where.input';
import { EnumLogActionFilter } from '../prisma/enum-log-action-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class LogWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [LogWhereInput], {nullable:true})
    AND?: Array<LogWhereInput>;

    @Field(() => [LogWhereInput], {nullable:true})
    OR?: Array<LogWhereInput>;

    @Field(() => [LogWhereInput], {nullable:true})
    NOT?: Array<LogWhereInput>;

    @Field(() => EnumLogActionFilter, {nullable:true})
    action?: EnumLogActionFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    details?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    route?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ipAddress?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    user?: UserNullableRelationFilter;
}
