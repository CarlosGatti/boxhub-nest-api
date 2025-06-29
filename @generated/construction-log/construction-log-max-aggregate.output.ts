import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LogType } from '../prisma/log-type.enum';

@ObjectType()
export class ConstructionLogMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => LogType, {nullable:true})
    type?: keyof typeof LogType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
