import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HomeOpsTaskTemplateSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    householdId?: true;

    @Field(() => Boolean, {nullable:true})
    points?: true;

    @Field(() => Boolean, {nullable:true})
    effortWeight?: true;

    @Field(() => Boolean, {nullable:true})
    estimatedMinutes?: true;

    @Field(() => Boolean, {nullable:true})
    occurrences?: true;

    @Field(() => Boolean, {nullable:true})
    interval?: true;

    @Field(() => Boolean, {nullable:true})
    dayOfMonth?: true;

    @Field(() => Boolean, {nullable:true})
    fixedAssigneeId?: true;

    @Field(() => Boolean, {nullable:true})
    createdById?: true;
}
