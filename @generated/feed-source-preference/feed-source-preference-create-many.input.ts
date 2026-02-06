import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class FeedSourcePreferenceCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => Boolean, {nullable:true})
    notifyOnNew?: boolean;

    @Field(() => Boolean, {nullable:true})
    isMuted?: boolean;

    @Field(() => Date, {nullable:true})
    mutedUntil?: Date | string;

    @Field(() => Int, {nullable:true})
    consecutiveSkips?: number;

    @Field(() => Date, {nullable:true})
    lastInteractedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
