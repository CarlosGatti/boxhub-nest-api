import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerWhereInput } from './container-where.input';
import { Type } from 'class-transformer';
import { ContainerUpdateWithoutItemsInput } from './container-update-without-items.input';

@InputType()
export class ContainerUpdateToOneWithWhereWithoutItemsInput {

    @Field(() => ContainerWhereInput, {nullable:true})
    @Type(() => ContainerWhereInput)
    where?: ContainerWhereInput;

    @Field(() => ContainerUpdateWithoutItemsInput, {nullable:false})
    @Type(() => ContainerUpdateWithoutItemsInput)
    data!: ContainerUpdateWithoutItemsInput;
}
