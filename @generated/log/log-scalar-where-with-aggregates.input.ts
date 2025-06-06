import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumLogActionWithAggregatesFilter } from '../prisma/enum-log-action-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LogScalarWhereWithAggregatesInput {

    @Field(() => [LogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LogScalarWhereWithAggregatesInput>;

    @Field(() => [LogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LogScalarWhereWithAggregatesInput>;

    @Field(() => [LogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LogScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => EnumLogActionWithAggregatesFilter, {nullable:true})
    action?: EnumLogActionWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    details?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    route?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    ipAddress?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
