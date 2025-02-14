import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PillarScalarWhereWithAggregatesInput {

    @Field(() => [PillarScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PillarScalarWhereWithAggregatesInput>;

    @Field(() => [PillarScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PillarScalarWhereWithAggregatesInput>;

    @Field(() => [PillarScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PillarScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
