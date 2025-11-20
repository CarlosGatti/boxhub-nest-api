import { DiscartItemCreateWithoutCreatedByInput } from './discart-item-create-without-created-by.input';
import { DiscartItemCreateOrConnectWithoutCreatedByInput } from './discart-item-create-or-connect-without-created-by.input';
import { DiscartItemCreateManyCreatedByInputEnvelope } from './discart-item-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';
export declare class DiscartItemCreateNestedManyWithoutCreatedByInput {
    create?: Array<DiscartItemCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<DiscartItemCreateOrConnectWithoutCreatedByInput>;
    createMany?: DiscartItemCreateManyCreatedByInputEnvelope;
    connect?: Array<Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>>;
}
