import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class HomeOpsHouseholdMemberHouseholdIdUserIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;
}
