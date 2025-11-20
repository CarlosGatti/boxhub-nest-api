import { ContainerCreateWithoutStorageInput } from './container-create-without-storage.input';
import { ContainerCreateOrConnectWithoutStorageInput } from './container-create-or-connect-without-storage.input';
import { ContainerCreateManyStorageInputEnvelope } from './container-create-many-storage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
export declare class ContainerCreateNestedManyWithoutStorageInput {
    create?: Array<ContainerCreateWithoutStorageInput>;
    connectOrCreate?: Array<ContainerCreateOrConnectWithoutStorageInput>;
    createMany?: ContainerCreateManyStorageInputEnvelope;
    connect?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;
}
