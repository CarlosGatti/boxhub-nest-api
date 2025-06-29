import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProjectCount {

    @Field(() => Int, {nullable:false})
    logs?: number;

    @Field(() => Int, {nullable:false})
    documents?: number;

    @Field(() => Int, {nullable:false})
    materials?: number;

    @Field(() => Int, {nullable:false})
    permits?: number;

    @Field(() => Int, {nullable:false})
    photos?: number;
}
