import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerWhereInput } from './container-where.input';

@InputType()
export class ContainerListRelationFilter {

    @Field(() => ContainerWhereInput, {nullable:true})
    every?: ContainerWhereInput;

    @Field(() => ContainerWhereInput, {nullable:true})
    some?: ContainerWhereInput;

    @Field(() => ContainerWhereInput, {nullable:true})
    none?: ContainerWhereInput;
}
