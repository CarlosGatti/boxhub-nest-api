import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { Type } from 'class-transformer';
import { ItemUpdateWithoutContainerInput } from './item-update-without-container.input';
import { ItemCreateWithoutContainerInput } from './item-create-without-container.input';

@InputType()
export class ItemUpsertWithWhereUniqueWithoutContainerInput {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;

    @Field(() => ItemUpdateWithoutContainerInput, {nullable:false})
    @Type(() => ItemUpdateWithoutContainerInput)
    update!: ItemUpdateWithoutContainerInput;

    @Field(() => ItemCreateWithoutContainerInput, {nullable:false})
    @Type(() => ItemCreateWithoutContainerInput)
    create!: ItemCreateWithoutContainerInput;
}
