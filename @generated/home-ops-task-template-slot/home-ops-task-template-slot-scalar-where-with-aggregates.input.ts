import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class HomeOpsTaskTemplateSlotScalarWhereWithAggregatesInput {

    @Field(() => [HomeOpsTaskTemplateSlotScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HomeOpsTaskTemplateSlotScalarWhereWithAggregatesInput>;

    @Field(() => [HomeOpsTaskTemplateSlotScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HomeOpsTaskTemplateSlotScalarWhereWithAggregatesInput>;

    @Field(() => [HomeOpsTaskTemplateSlotScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HomeOpsTaskTemplateSlotScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    templateId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    label?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    windowStart?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    windowEnd?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;
}
