import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';
import { DiscartItemUpdateWithoutCreatedByInput } from './discart-item-update-without-created-by.input';
import { DiscartItemCreateWithoutCreatedByInput } from './discart-item-create-without-created-by.input';
export declare class DiscartItemUpsertWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>;
    update: DiscartItemUpdateWithoutCreatedByInput;
    create: DiscartItemCreateWithoutCreatedByInput;
}
