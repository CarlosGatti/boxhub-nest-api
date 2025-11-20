import { ContainerCreateNestedManyWithoutStorageInput } from '../container/container-create-nested-many-without-storage.input';
export declare class StorageCreateWithoutMembersInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    containers?: ContainerCreateNestedManyWithoutStorageInput;
}
