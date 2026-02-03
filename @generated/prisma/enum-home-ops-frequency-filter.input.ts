import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsFrequency } from './home-ops-frequency.enum';
import { NestedEnumHomeOpsFrequencyFilter } from './nested-enum-home-ops-frequency-filter.input';

@InputType()
export class EnumHomeOpsFrequencyFilter {

    @Field(() => HomeOpsFrequency, {nullable:true})
    equals?: keyof typeof HomeOpsFrequency;

    @Field(() => [HomeOpsFrequency], {nullable:true})
    in?: Array<keyof typeof HomeOpsFrequency>;

    @Field(() => [HomeOpsFrequency], {nullable:true})
    notIn?: Array<keyof typeof HomeOpsFrequency>;

    @Field(() => NestedEnumHomeOpsFrequencyFilter, {nullable:true})
    not?: NestedEnumHomeOpsFrequencyFilter;
}
