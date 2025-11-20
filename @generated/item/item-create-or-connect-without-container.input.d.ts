import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { ItemCreateWithoutContainerInput } from './item-create-without-container.input';
export declare class ItemCreateOrConnectWithoutContainerInput {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    create: ItemCreateWithoutContainerInput;
}
