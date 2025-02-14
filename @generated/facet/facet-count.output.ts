import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FacetCount {

    @Field(() => Int, {nullable:false})
    values?: number;
}
