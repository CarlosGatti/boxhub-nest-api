import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class HomeOpsTaskTemplateAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    householdId?: number;

    @Field(() => Float, {nullable:true})
    points?: number;

    @Field(() => Float, {nullable:true})
    effortWeight?: number;

    @Field(() => Float, {nullable:true})
    estimatedMinutes?: number;

    @Field(() => Float, {nullable:true})
    occurrences?: number;

    @Field(() => Float, {nullable:true})
    interval?: number;

    @Field(() => Float, {nullable:true})
    dayOfMonth?: number;

    @Field(() => Float, {nullable:true})
    fixedAssigneeId?: number;

    @Field(() => Float, {nullable:true})
    createdById?: number;
}
