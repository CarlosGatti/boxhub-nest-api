import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';
import { DiscartItemCreateWithoutCreatedByInput } from './discart-item-create-without-created-by.input';
export declare class DiscartItemCreateOrConnectWithoutCreatedByInput {
    where: Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>;
    create: DiscartItemCreateWithoutCreatedByInput;
}
