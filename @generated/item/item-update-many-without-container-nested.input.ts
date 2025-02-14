import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCreateWithoutContainerInput } from './item-create-without-container.input';
import { Type } from 'class-transformer';
import { ItemCreateOrConnectWithoutContainerInput } from './item-create-or-connect-without-container.input';
import { ItemUpsertWithWhereUniqueWithoutContainerInput } from './item-upsert-with-where-unique-without-container.input';
import { ItemCreateManyContainerInputEnvelope } from './item-create-many-container-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { ItemUpdateWithWhereUniqueWithoutContainerInput } from './item-update-with-where-unique-without-container.input';
import { ItemUpdateManyWithWhereWithoutContainerInput } from './item-update-many-with-where-without-container.input';
import { ItemScalarWhereInput } from './item-scalar-where.input';

@InputType()
export class ItemUpdateManyWithoutContainerNestedInput {

    @Field(() => [ItemCreateWithoutContainerInput], {nullable:true})
    @Type(() => ItemCreateWithoutContainerInput)
    create?: Array<ItemCreateWithoutContainerInput>;

    @Field(() => [ItemCreateOrConnectWithoutContainerInput], {nullable:true})
    @Type(() => ItemCreateOrConnectWithoutContainerInput)
    connectOrCreate?: Array<ItemCreateOrConnectWithoutContainerInput>;

    @Field(() => [ItemUpsertWithWhereUniqueWithoutContainerInput], {nullable:true})
    @Type(() => ItemUpsertWithWhereUniqueWithoutContainerInput)
    upsert?: Array<ItemUpsertWithWhereUniqueWithoutContainerInput>;

    @Field(() => ItemCreateManyContainerInputEnvelope, {nullable:true})
    @Type(() => ItemCreateManyContainerInputEnvelope)
    createMany?: ItemCreateManyContainerInputEnvelope;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;

    @Field(() => [ItemUpdateWithWhereUniqueWithoutContainerInput], {nullable:true})
    @Type(() => ItemUpdateWithWhereUniqueWithoutContainerInput)
    update?: Array<ItemUpdateWithWhereUniqueWithoutContainerInput>;

    @Field(() => [ItemUpdateManyWithWhereWithoutContainerInput], {nullable:true})
    @Type(() => ItemUpdateManyWithWhereWithoutContainerInput)
    updateMany?: Array<ItemUpdateManyWithWhereWithoutContainerInput>;

    @Field(() => [ItemScalarWhereInput], {nullable:true})
    @Type(() => ItemScalarWhereInput)
    deleteMany?: Array<ItemScalarWhereInput>;
}
