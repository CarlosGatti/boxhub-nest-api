import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberCreateManyUserInput } from './home-ops-household-member-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsHouseholdMemberCreateManyUserInputEnvelope {

    @Field(() => [HomeOpsHouseholdMemberCreateManyUserInput], {nullable:false})
    @Type(() => HomeOpsHouseholdMemberCreateManyUserInput)
    data!: Array<HomeOpsHouseholdMemberCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
