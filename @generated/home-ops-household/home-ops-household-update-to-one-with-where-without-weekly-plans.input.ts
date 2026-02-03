import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdUpdateWithoutWeeklyPlansInput } from './home-ops-household-update-without-weekly-plans.input';

@InputType()
export class HomeOpsHouseholdUpdateToOneWithWhereWithoutWeeklyPlansInput {

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;

    @Field(() => HomeOpsHouseholdUpdateWithoutWeeklyPlansInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateWithoutWeeklyPlansInput)
    data!: HomeOpsHouseholdUpdateWithoutWeeklyPlansInput;
}
