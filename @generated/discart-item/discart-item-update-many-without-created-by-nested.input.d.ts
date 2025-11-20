import { DiscartItemCreateWithoutCreatedByInput } from './discart-item-create-without-created-by.input';
import { DiscartItemCreateOrConnectWithoutCreatedByInput } from './discart-item-create-or-connect-without-created-by.input';
import { DiscartItemUpsertWithWhereUniqueWithoutCreatedByInput } from './discart-item-upsert-with-where-unique-without-created-by.input';
import { DiscartItemCreateManyCreatedByInputEnvelope } from './discart-item-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';
import { DiscartItemUpdateWithWhereUniqueWithoutCreatedByInput } from './discart-item-update-with-where-unique-without-created-by.input';
import { DiscartItemUpdateManyWithWhereWithoutCreatedByInput } from './discart-item-update-many-with-where-without-created-by.input';
import { DiscartItemScalarWhereInput } from './discart-item-scalar-where.input';
export declare class DiscartItemUpdateManyWithoutCreatedByNestedInput {
    create?: Array<DiscartItemCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<DiscartItemCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<DiscartItemUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: DiscartItemCreateManyCreatedByInputEnvelope;
    set?: Array<Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>>;
    update?: Array<DiscartItemUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<DiscartItemUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<DiscartItemScalarWhereInput>;
}
