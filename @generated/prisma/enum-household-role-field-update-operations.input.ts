import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseholdRole } from './household-role.enum';

@InputType()
export class EnumHouseholdRoleFieldUpdateOperationsInput {

    @Field(() => HouseholdRole, {nullable:true})
    set?: keyof typeof HouseholdRole;
}
