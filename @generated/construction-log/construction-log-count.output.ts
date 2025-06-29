import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ConstructionLogCount {

    @Field(() => Int, {nullable:false})
    comments?: number;
}
