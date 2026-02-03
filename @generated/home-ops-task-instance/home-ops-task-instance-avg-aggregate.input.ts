import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HomeOpsTaskInstanceAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    householdId?: true;

    @Field(() => Boolean, {nullable:true})
    templateId?: true;

    @Field(() => Boolean, {nullable:true})
    weeklyPlanId?: true;

    @Field(() => Boolean, {nullable:true})
    points?: true;

    @Field(() => Boolean, {nullable:true})
    effortWeight?: true;

    @Field(() => Boolean, {nullable:true})
    estimatedMinutes?: true;

    @Field(() => Boolean, {nullable:true})
    assigneeId?: true;

    @Field(() => Boolean, {nullable:true})
    completedById?: true;
}
