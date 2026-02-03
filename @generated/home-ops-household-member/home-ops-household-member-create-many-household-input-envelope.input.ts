import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberCreateManyHouseholdInput } from './home-ops-household-member-create-many-household.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsHouseholdMemberCreateManyHouseholdInputEnvelope {

    @Field(() => [HomeOpsHouseholdMemberCreateManyHouseholdInput], {nullable:false})
    @Type(() => HomeOpsHouseholdMemberCreateManyHouseholdInput)
    data!: Array<HomeOpsHouseholdMemberCreateManyHouseholdInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
