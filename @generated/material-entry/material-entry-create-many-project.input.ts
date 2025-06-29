import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class MaterialEntryCreateManyProjectInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    supplier!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Int, {nullable:true})
    receivedById?: number;

    @Field(() => Date, {nullable:false})
    receivedAt!: Date | string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    imageUrls?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
