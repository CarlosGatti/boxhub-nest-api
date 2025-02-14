import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerWhereInput } from './container-where.input';

@InputType()
export class ContainerRelationFilter {

    @Field(() => ContainerWhereInput, {nullable:true})
    is?: ContainerWhereInput;

    @Field(() => ContainerWhereInput, {nullable:true})
    isNot?: ContainerWhereInput;
}
