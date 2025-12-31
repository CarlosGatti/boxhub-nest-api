import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurrenceFrequency } from './recurrence-frequency.enum';
import { NestedEnumRecurrenceFrequencyWithAggregatesFilter } from './nested-enum-recurrence-frequency-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRecurrenceFrequencyFilter } from './nested-enum-recurrence-frequency-filter.input';

@InputType()
export class EnumRecurrenceFrequencyWithAggregatesFilter {

    @Field(() => RecurrenceFrequency, {nullable:true})
    equals?: keyof typeof RecurrenceFrequency;

    @Field(() => [RecurrenceFrequency], {nullable:true})
    in?: Array<keyof typeof RecurrenceFrequency>;

    @Field(() => [RecurrenceFrequency], {nullable:true})
    notIn?: Array<keyof typeof RecurrenceFrequency>;

    @Field(() => NestedEnumRecurrenceFrequencyWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRecurrenceFrequencyWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRecurrenceFrequencyFilter, {nullable:true})
    _min?: NestedEnumRecurrenceFrequencyFilter;

    @Field(() => NestedEnumRecurrenceFrequencyFilter, {nullable:true})
    _max?: NestedEnumRecurrenceFrequencyFilter;
}
