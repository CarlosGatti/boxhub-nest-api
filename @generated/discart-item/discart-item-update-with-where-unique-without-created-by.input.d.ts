import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';
import { DiscartItemUpdateWithoutCreatedByInput } from './discart-item-update-without-created-by.input';
export declare class DiscartItemUpdateWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>;
    data: DiscartItemUpdateWithoutCreatedByInput;
}
