import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerCreateWithoutItemsInput } from './container-create-without-items.input';
import { Type } from 'class-transformer';
import { ContainerCreateOrConnectWithoutItemsInput } from './container-create-or-connect-without-items.input';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';

@InputType()
export class ContainerCreateNestedOneWithoutItemsInput {

    @Field(() => ContainerCreateWithoutItemsInput, {nullable:true})
    @Type(() => ContainerCreateWithoutItemsInput)
    create?: ContainerCreateWithoutItemsInput;

    @Field(() => ContainerCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => ContainerCreateOrConnectWithoutItemsInput)
    connectOrCreate?: ContainerCreateOrConnectWithoutItemsInput;

    @Field(() => ContainerWhereUniqueInput, {nullable:true})
    @Type(() => ContainerWhereUniqueInput)
    connect?: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;
}
