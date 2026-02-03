import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class HomeOpsHouseholdScalarWhereWithAggregatesInput {

    @Field(() => [HomeOpsHouseholdScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HomeOpsHouseholdScalarWhereWithAggregatesInput>;

    @Field(() => [HomeOpsHouseholdScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HomeOpsHouseholdScalarWhereWithAggregatesInput>;

    @Field(() => [HomeOpsHouseholdScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HomeOpsHouseholdScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ownerId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    appId?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
