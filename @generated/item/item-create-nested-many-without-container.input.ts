import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCreateWithoutContainerInput } from './item-create-without-container.input';
import { Type } from 'class-transformer';
import { ItemCreateOrConnectWithoutContainerInput } from './item-create-or-connect-without-container.input';
import { ItemCreateManyContainerInputEnvelope } from './item-create-many-container-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';

@InputType()
export class ItemCreateNestedManyWithoutContainerInput {

    @Field(() => [ItemCreateWithoutContainerInput], {nullable:true})
    @Type(() => ItemCreateWithoutContainerInput)
    create?: Array<ItemCreateWithoutContainerInput>;

    @Field(() => [ItemCreateOrConnectWithoutContainerInput], {nullable:true})
    @Type(() => ItemCreateOrConnectWithoutContainerInput)
    connectOrCreate?: Array<ItemCreateOrConnectWithoutContainerInput>;

    @Field(() => ItemCreateManyContainerInputEnvelope, {nullable:true})
    @Type(() => ItemCreateManyContainerInputEnvelope)
    createMany?: ItemCreateManyContainerInputEnvelope;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
}
