import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { Type } from 'class-transformer';
import { ItemUpdateWithoutContainerInput } from './item-update-without-container.input';

@InputType()
export class ItemUpdateWithWhereUniqueWithoutContainerInput {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;

    @Field(() => ItemUpdateWithoutContainerInput, {nullable:false})
    @Type(() => ItemUpdateWithoutContainerInput)
    data!: ItemUpdateWithoutContainerInput;
}
