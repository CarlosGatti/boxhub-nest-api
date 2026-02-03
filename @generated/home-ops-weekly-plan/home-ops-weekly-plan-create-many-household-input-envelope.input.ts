import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanCreateManyHouseholdInput } from './home-ops-weekly-plan-create-many-household.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsWeeklyPlanCreateManyHouseholdInputEnvelope {

    @Field(() => [HomeOpsWeeklyPlanCreateManyHouseholdInput], {nullable:false})
    @Type(() => HomeOpsWeeklyPlanCreateManyHouseholdInput)
    data!: Array<HomeOpsWeeklyPlanCreateManyHouseholdInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
