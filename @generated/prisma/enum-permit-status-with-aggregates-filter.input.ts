import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitStatus } from './permit-status.enum';
import { NestedEnumPermitStatusWithAggregatesFilter } from './nested-enum-permit-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPermitStatusFilter } from './nested-enum-permit-status-filter.input';

@InputType()
export class EnumPermitStatusWithAggregatesFilter {

    @Field(() => PermitStatus, {nullable:true})
    equals?: keyof typeof PermitStatus;

    @Field(() => [PermitStatus], {nullable:true})
    in?: Array<keyof typeof PermitStatus>;

    @Field(() => [PermitStatus], {nullable:true})
    notIn?: Array<keyof typeof PermitStatus>;

    @Field(() => NestedEnumPermitStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPermitStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPermitStatusFilter, {nullable:true})
    _min?: NestedEnumPermitStatusFilter;

    @Field(() => NestedEnumPermitStatusFilter, {nullable:true})
    _max?: NestedEnumPermitStatusFilter;
}
