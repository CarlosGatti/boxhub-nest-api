import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedClientCount {

    @Field(() => Int, {nullable:false})
    projects?: number;

    @Field(() => Int, {nullable:false})
    invoices?: number;

    @Field(() => Int, {nullable:false})
    proposals?: number;

    @Field(() => Int, {nullable:false})
    brandingProjects?: number;

    @Field(() => Int, {nullable:false})
    internalNotes?: number;

    @Field(() => Int, {nullable:false})
    intakeForms?: number;
}
