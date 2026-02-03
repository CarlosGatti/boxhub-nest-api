import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanCreateManyInput } from './home-ops-weekly-plan-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHomeOpsWeeklyPlanArgs {

    @Field(() => [HomeOpsWeeklyPlanCreateManyInput], {nullable:false})
    @Type(() => HomeOpsWeeklyPlanCreateManyInput)
    data!: Array<HomeOpsWeeklyPlanCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
