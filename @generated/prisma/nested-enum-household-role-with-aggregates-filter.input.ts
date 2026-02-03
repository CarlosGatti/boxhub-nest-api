import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseholdRole } from './household-role.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumHouseholdRoleFilter } from './nested-enum-household-role-filter.input';

@InputType()
export class NestedEnumHouseholdRoleWithAggregatesFilter {

    @Field(() => HouseholdRole, {nullable:true})
    equals?: keyof typeof HouseholdRole;

    @Field(() => [HouseholdRole], {nullable:true})
    in?: Array<keyof typeof HouseholdRole>;

    @Field(() => [HouseholdRole], {nullable:true})
    notIn?: Array<keyof typeof HouseholdRole>;

    @Field(() => NestedEnumHouseholdRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumHouseholdRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumHouseholdRoleFilter, {nullable:true})
    _min?: NestedEnumHouseholdRoleFilter;

    @Field(() => NestedEnumHouseholdRoleFilter, {nullable:true})
    _max?: NestedEnumHouseholdRoleFilter;
}
