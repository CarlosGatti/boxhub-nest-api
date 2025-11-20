import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { ContainerUpdateWithoutStorageInput } from './container-update-without-storage.input';
export declare class ContainerUpdateWithWhereUniqueWithoutStorageInput {
    where: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;
    data: ContainerUpdateWithoutStorageInput;
}
