import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PortfolioScalarWhereWithAggregatesInput {

    @Field(() => [PortfolioScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PortfolioScalarWhereWithAggregatesInput>;

    @Field(() => [PortfolioScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PortfolioScalarWhereWithAggregatesInput>;

    @Field(() => [PortfolioScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PortfolioScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    baseCurrency?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
