import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanUpdateManyMutationInput } from './home-ops-weekly-plan-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanWhereInput } from './home-ops-weekly-plan-where.input';

@ArgsType()
export class UpdateManyHomeOpsWeeklyPlanArgs {

    @Field(() => HomeOpsWeeklyPlanUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanUpdateManyMutationInput)
    data!: HomeOpsWeeklyPlanUpdateManyMutationInput;

    @Field(() => HomeOpsWeeklyPlanWhereInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereInput)
    where?: HomeOpsWeeklyPlanWhereInput;
}
