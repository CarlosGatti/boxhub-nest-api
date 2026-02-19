import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class BucketVisionCheckinUncheckedCreateWithoutBoardInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    kind?: string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    mood?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    snapshot?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
