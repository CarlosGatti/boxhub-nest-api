import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HomeOpsTaskTemplateSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    householdId?: number;

    @Field(() => Int, {nullable:true})
    points?: number;

    @Field(() => Int, {nullable:true})
    effortWeight?: number;

    @Field(() => Int, {nullable:true})
    estimatedMinutes?: number;

    @Field(() => Int, {nullable:true})
    occurrences?: number;

    @Field(() => Int, {nullable:true})
    interval?: number;

    @Field(() => Int, {nullable:true})
    dayOfMonth?: number;

    @Field(() => Int, {nullable:true})
    fixedAssigneeId?: number;

    @Field(() => Int, {nullable:true})
    createdById?: number;
}
