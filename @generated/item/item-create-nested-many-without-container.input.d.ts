import { ItemCreateWithoutContainerInput } from './item-create-without-container.input';
import { ItemCreateOrConnectWithoutContainerInput } from './item-create-or-connect-without-container.input';
import { ItemCreateManyContainerInputEnvelope } from './item-create-many-container-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';
export declare class ItemCreateNestedManyWithoutContainerInput {
    create?: Array<ItemCreateWithoutContainerInput>;
    connectOrCreate?: Array<ItemCreateOrConnectWithoutContainerInput>;
    createMany?: ItemCreateManyContainerInputEnvelope;
    connect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
}
