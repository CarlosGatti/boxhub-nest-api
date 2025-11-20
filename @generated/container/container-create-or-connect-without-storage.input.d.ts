import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { ContainerCreateWithoutStorageInput } from './container-create-without-storage.input';
export declare class ContainerCreateOrConnectWithoutStorageInput {
    where: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;
    create: ContainerCreateWithoutStorageInput;
}
