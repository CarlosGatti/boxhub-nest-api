import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubcontractorCount {

    @Field(() => Int, {nullable:false})
    insurances?: number;
}
