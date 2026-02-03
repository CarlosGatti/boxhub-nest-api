import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsFrequency } from './home-ops-frequency.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumHomeOpsFrequencyFilter } from './nested-enum-home-ops-frequency-filter.input';

@InputType()
export class NestedEnumHomeOpsFrequencyWithAggregatesFilter {

    @Field(() => HomeOpsFrequency, {nullable:true})
    equals?: keyof typeof HomeOpsFrequency;

    @Field(() => [HomeOpsFrequency], {nullable:true})
    in?: Array<keyof typeof HomeOpsFrequency>;

    @Field(() => [HomeOpsFrequency], {nullable:true})
    notIn?: Array<keyof typeof HomeOpsFrequency>;

    @Field(() => NestedEnumHomeOpsFrequencyWithAggregatesFilter, {nullable:true})
    not?: NestedEnumHomeOpsFrequencyWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumHomeOpsFrequencyFilter, {nullable:true})
    _min?: NestedEnumHomeOpsFrequencyFilter;

    @Field(() => NestedEnumHomeOpsFrequencyFilter, {nullable:true})
    _max?: NestedEnumHomeOpsFrequencyFilter;
}
