import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { Type } from 'class-transformer';
import { ItemCreateWithoutContainerInput } from './item-create-without-container.input';

@InputType()
export class ItemCreateOrConnectWithoutContainerInput {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;

    @Field(() => ItemCreateWithoutContainerInput, {nullable:false})
    @Type(() => ItemCreateWithoutContainerInput)
    create!: ItemCreateWithoutContainerInput;
}
