import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HomeOpsTaskTemplateMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    householdId?: true;

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
    frequency?: true;

    @Field(() => Boolean, {nullable:true})
    occurrences?: true;

    @Field(() => Boolean, {nullable:true})
    interval?: true;

    @Field(() => Boolean, {nullable:true})
    dayOfMonth?: true;

    @Field(() => Boolean, {nullable:true})
    timezone?: true;

    @Field(() => Boolean, {nullable:true})
    assignmentMode?: true;

    @Field(() => Boolean, {nullable:true})
    fixedAssigneeId?: true;

    @Field(() => Boolean, {nullable:true})
    isActive?: true;

    @Field(() => Boolean, {nullable:true})
    createdById?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
