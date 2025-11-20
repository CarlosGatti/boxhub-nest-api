import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { ItemUpdateWithoutContainerInput } from './item-update-without-container.input';
import { ItemCreateWithoutContainerInput } from './item-create-without-container.input';
export declare class ItemUpsertWithWhereUniqueWithoutContainerInput {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    update: ItemUpdateWithoutContainerInput;
    create: ItemCreateWithoutContainerInput;
}
