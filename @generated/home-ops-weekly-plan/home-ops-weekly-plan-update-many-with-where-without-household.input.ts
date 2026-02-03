import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanScalarWhereInput } from './home-ops-weekly-plan-scalar-where.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanUpdateManyMutationInput } from './home-ops-weekly-plan-update-many-mutation.input';

@InputType()
export class HomeOpsWeeklyPlanUpdateManyWithWhereWithoutHouseholdInput {

    @Field(() => HomeOpsWeeklyPlanScalarWhereInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanScalarWhereInput)
    where!: HomeOpsWeeklyPlanScalarWhereInput;

    @Field(() => HomeOpsWeeklyPlanUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanUpdateManyMutationInput)
    data!: HomeOpsWeeklyPlanUpdateManyMutationInput;
}
