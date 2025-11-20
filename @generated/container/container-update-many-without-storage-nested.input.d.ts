import { ContainerCreateWithoutStorageInput } from './container-create-without-storage.input';
import { ContainerCreateOrConnectWithoutStorageInput } from './container-create-or-connect-without-storage.input';
import { ContainerUpsertWithWhereUniqueWithoutStorageInput } from './container-upsert-with-where-unique-without-storage.input';
import { ContainerCreateManyStorageInputEnvelope } from './container-create-many-storage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { ContainerUpdateWithWhereUniqueWithoutStorageInput } from './container-update-with-where-unique-without-storage.input';
import { ContainerUpdateManyWithWhereWithoutStorageInput } from './container-update-many-with-where-without-storage.input';
import { ContainerScalarWhereInput } from './container-scalar-where.input';
export declare class ContainerUpdateManyWithoutStorageNestedInput {
    create?: Array<ContainerCreateWithoutStorageInput>;
    connectOrCreate?: Array<ContainerCreateOrConnectWithoutStorageInput>;
    upsert?: Array<ContainerUpsertWithWhereUniqueWithoutStorageInput>;
    createMany?: ContainerCreateManyStorageInputEnvelope;
    set?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;
    disconnect?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;
    delete?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;
    connect?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;
    update?: Array<ContainerUpdateWithWhereUniqueWithoutStorageInput>;
    updateMany?: Array<ContainerUpdateManyWithWhereWithoutStorageInput>;
    deleteMany?: Array<ContainerScalarWhereInput>;
}
