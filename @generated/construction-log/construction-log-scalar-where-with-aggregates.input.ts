import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumLogTypeWithAggregatesFilter } from '../prisma/enum-log-type-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ConstructionLogScalarWhereWithAggregatesInput {

    @Field(() => [ConstructionLogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ConstructionLogScalarWhereWithAggregatesInput>;

    @Field(() => [ConstructionLogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ConstructionLogScalarWhereWithAggregatesInput>;

    @Field(() => [ConstructionLogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ConstructionLogScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    projectId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => EnumLogTypeWithAggregatesFilter, {nullable:true})
    type?: EnumLogTypeWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    images?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
