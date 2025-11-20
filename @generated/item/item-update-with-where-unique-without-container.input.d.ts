import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { ItemUpdateWithoutContainerInput } from './item-update-without-container.input';
export declare class ItemUpdateWithWhereUniqueWithoutContainerInput {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    data: ItemUpdateWithoutContainerInput;
}
