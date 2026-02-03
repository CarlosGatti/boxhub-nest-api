import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberCreateManyInput } from './home-ops-household-member-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHomeOpsHouseholdMemberArgs {

    @Field(() => [HomeOpsHouseholdMemberCreateManyInput], {nullable:false})
    @Type(() => HomeOpsHouseholdMemberCreateManyInput)
    data!: Array<HomeOpsHouseholdMemberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
