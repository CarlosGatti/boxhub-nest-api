import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HomeOpsTaskInstanceCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    householdId?: true;

    @Field(() => Boolean, {nullable:true})
    templateId?: true;

    @Field(() => Boolean, {nullable:true})
    weeklyPlanId?: true;

    @Field(() => Boolean, {nullable:true})
    sourceKey?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    category?: true;

    @Field(() => Boolean, {nullable:true})
    points?: true;

    @Field(() => Boolean, {nullable:true})
    effortWeight?: true;

    @Field(() => Boolean, {nullable:true})
    estimatedMinutes?: true;

    @Field(() => Boolean, {nullable:true})
    dueDate?: true;

    @Field(() => Boolean, {nullable:true})
    slotLabel?: true;

    @Field(() => Boolean, {nullable:true})
    windowStart?: true;

    @Field(() => Boolean, {nullable:true})
    windowEnd?: true;

    @Field(() => Boolean, {nullable:true})
    assigneeId?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    completedAt?: true;

    @Field(() => Boolean, {nullable:true})
    completedById?: true;

    @Field(() => Boolean, {nullable:true})
    skippedAt?: true;

    @Field(() => Boolean, {nullable:true})
    skipReason?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
