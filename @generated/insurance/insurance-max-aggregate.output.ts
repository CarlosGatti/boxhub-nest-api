import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class InsuranceMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    subcontractorId?: number;

    @Field(() => String, {nullable:true})
    company?: string;

    @Field(() => Date, {nullable:true})
    expiration?: Date | string;

    @Field(() => String, {nullable:true})
    documentUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
