import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurrenceFrequency } from './recurrence-frequency.enum';
import { NestedEnumRecurrenceFrequencyFilter } from './nested-enum-recurrence-frequency-filter.input';

@InputType()
export class EnumRecurrenceFrequencyFilter {

    @Field(() => RecurrenceFrequency, {nullable:true})
    equals?: keyof typeof RecurrenceFrequency;

    @Field(() => [RecurrenceFrequency], {nullable:true})
    in?: Array<keyof typeof RecurrenceFrequency>;

    @Field(() => [RecurrenceFrequency], {nullable:true})
    notIn?: Array<keyof typeof RecurrenceFrequency>;

    @Field(() => NestedEnumRecurrenceFrequencyFilter, {nullable:true})
    not?: NestedEnumRecurrenceFrequencyFilter;
}
