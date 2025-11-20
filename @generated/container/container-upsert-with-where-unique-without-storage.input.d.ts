import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { ContainerUpdateWithoutStorageInput } from './container-update-without-storage.input';
import { ContainerCreateWithoutStorageInput } from './container-create-without-storage.input';
export declare class ContainerUpsertWithWhereUniqueWithoutStorageInput {
    where: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;
    update: ContainerUpdateWithoutStorageInput;
    create: ContainerCreateWithoutStorageInput;
}
