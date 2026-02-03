import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseholdRole } from './household-role.enum';

@InputType()
export class NestedEnumHouseholdRoleFilter {

    @Field(() => HouseholdRole, {nullable:true})
    equals?: keyof typeof HouseholdRole;

    @Field(() => [HouseholdRole], {nullable:true})
    in?: Array<keyof typeof HouseholdRole>;

    @Field(() => [HouseholdRole], {nullable:true})
    notIn?: Array<keyof typeof HouseholdRole>;

    @Field(() => NestedEnumHouseholdRoleFilter, {nullable:true})
    not?: NestedEnumHouseholdRoleFilter;
}
