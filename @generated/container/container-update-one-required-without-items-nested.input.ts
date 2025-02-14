import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerCreateWithoutItemsInput } from './container-create-without-items.input';
import { Type } from 'class-transformer';
import { ContainerCreateOrConnectWithoutItemsInput } from './container-create-or-connect-without-items.input';
import { ContainerUpsertWithoutItemsInput } from './container-upsert-without-items.input';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { ContainerUpdateToOneWithWhereWithoutItemsInput } from './container-update-to-one-with-where-without-items.input';

@InputType()
export class ContainerUpdateOneRequiredWithoutItemsNestedInput {

    @Field(() => ContainerCreateWithoutItemsInput, {nullable:true})
    @Type(() => ContainerCreateWithoutItemsInput)
    create?: ContainerCreateWithoutItemsInput;

    @Field(() => ContainerCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => ContainerCreateOrConnectWithoutItemsInput)
    connectOrCreate?: ContainerCreateOrConnectWithoutItemsInput;

    @Field(() => ContainerUpsertWithoutItemsInput, {nullable:true})
    @Type(() => ContainerUpsertWithoutItemsInput)
    upsert?: ContainerUpsertWithoutItemsInput;

    @Field(() => ContainerWhereUniqueInput, {nullable:true})
    @Type(() => ContainerWhereUniqueInput)
    connect?: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;

    @Field(() => ContainerUpdateToOneWithWhereWithoutItemsInput, {nullable:true})
    @Type(() => ContainerUpdateToOneWithWhereWithoutItemsInput)
    update?: ContainerUpdateToOneWithWhereWithoutItemsInput;
}
