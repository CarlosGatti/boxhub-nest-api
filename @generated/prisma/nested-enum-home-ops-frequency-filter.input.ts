import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsFrequency } from './home-ops-frequency.enum';

@InputType()
export class NestedEnumHomeOpsFrequencyFilter {

    @Field(() => HomeOpsFrequency, {nullable:true})
    equals?: keyof typeof HomeOpsFrequency;

    @Field(() => [HomeOpsFrequency], {nullable:true})
    in?: Array<keyof typeof HomeOpsFrequency>;

    @Field(() => [HomeOpsFrequency], {nullable:true})
    notIn?: Array<keyof typeof HomeOpsFrequency>;

    @Field(() => NestedEnumHomeOpsFrequencyFilter, {nullable:true})
    not?: NestedEnumHomeOpsFrequencyFilter;
}
