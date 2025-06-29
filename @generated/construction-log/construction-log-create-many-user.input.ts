import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LogType } from '../prisma/log-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class ConstructionLogCreateManyUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => LogType, {nullable:false})
    type!: keyof typeof LogType;

    @Field(() => GraphQLJSON, {nullable:true})
    images?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
