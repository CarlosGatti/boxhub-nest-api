import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class InsuranceScalarWhereWithAggregatesInput {

    @Field(() => [InsuranceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<InsuranceScalarWhereWithAggregatesInput>;

    @Field(() => [InsuranceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<InsuranceScalarWhereWithAggregatesInput>;

    @Field(() => [InsuranceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<InsuranceScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    subcontractorId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    company?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiration?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    documentUrl?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
