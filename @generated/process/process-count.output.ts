import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProcessCount {

    @Field(() => Int, {nullable:false})
    themes?: number;
}
