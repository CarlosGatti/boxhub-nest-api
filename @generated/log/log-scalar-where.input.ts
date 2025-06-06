import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumLogActionFilter } from '../prisma/enum-log-action-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LogScalarWhereInput {

    @Field(() => [LogScalarWhereInput], {nullable:true})
    AND?: Array<LogScalarWhereInput>;

    @Field(() => [LogScalarWhereInput], {nullable:true})
    OR?: Array<LogScalarWhereInput>;

    @Field(() => [LogScalarWhereInput], {nullable:true})
    NOT?: Array<LogScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
