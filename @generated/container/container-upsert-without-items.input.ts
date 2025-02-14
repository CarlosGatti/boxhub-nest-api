import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerUpdateWithoutItemsInput } from './container-update-without-items.input';
import { Type } from 'class-transformer';
import { ContainerCreateWithoutItemsInput } from './container-create-without-items.input';
import { ContainerWhereInput } from './container-where.input';

@InputType()
export class ContainerUpsertWithoutItemsInput {

    @Field(() => ContainerUpdateWithoutItemsInput, {nullable:false})
    @Type(() => ContainerUpdateWithoutItemsInput)
    update!: ContainerUpdateWithoutItemsInput;

    @Field(() => ContainerCreateWithoutItemsInput, {nullable:false})
    @Type(() => ContainerCreateWithoutItemsInput)
    create!: ContainerCreateWithoutItemsInput;

    @Field(() => ContainerWhereInput, {nullable:true})
    @Type(() => ContainerWhereInput)
    where?: ContainerWhereInput;
}
