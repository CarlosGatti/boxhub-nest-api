import { ItemCreateWithoutContainerInput } from './item-create-without-container.input';
import { ItemCreateOrConnectWithoutContainerInput } from './item-create-or-connect-without-container.input';
import { ItemUpsertWithWhereUniqueWithoutContainerInput } from './item-upsert-with-where-unique-without-container.input';
import { ItemCreateManyContainerInputEnvelope } from './item-create-many-container-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { ItemUpdateWithWhereUniqueWithoutContainerInput } from './item-update-with-where-unique-without-container.input';
import { ItemUpdateManyWithWhereWithoutContainerInput } from './item-update-many-with-where-without-container.input';
import { ItemScalarWhereInput } from './item-scalar-where.input';
export declare class ItemUpdateManyWithoutContainerNestedInput {
    create?: Array<ItemCreateWithoutContainerInput>;
    connectOrCreate?: Array<ItemCreateOrConnectWithoutContainerInput>;
    upsert?: Array<ItemUpsertWithWhereUniqueWithoutContainerInput>;
    createMany?: ItemCreateManyContainerInputEnvelope;
    set?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
    update?: Array<ItemUpdateWithWhereUniqueWithoutContainerInput>;
    updateMany?: Array<ItemUpdateManyWithWhereWithoutContainerInput>;
    deleteMany?: Array<ItemScalarWhereInput>;
}
