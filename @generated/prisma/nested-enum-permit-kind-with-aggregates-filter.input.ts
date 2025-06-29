import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitKind } from './permit-kind.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPermitKindFilter } from './nested-enum-permit-kind-filter.input';

@InputType()
export class NestedEnumPermitKindWithAggregatesFilter {

    @Field(() => PermitKind, {nullable:true})
    equals?: keyof typeof PermitKind;

    @Field(() => [PermitKind], {nullable:true})
    in?: Array<keyof typeof PermitKind>;

    @Field(() => [PermitKind], {nullable:true})
    notIn?: Array<keyof typeof PermitKind>;

    @Field(() => NestedEnumPermitKindWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPermitKindWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPermitKindFilter, {nullable:true})
    _min?: NestedEnumPermitKindFilter;

    @Field(() => NestedEnumPermitKindFilter, {nullable:true})
    _max?: NestedEnumPermitKindFilter;
}
