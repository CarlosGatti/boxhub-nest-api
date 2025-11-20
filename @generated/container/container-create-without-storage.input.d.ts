import { CategoryCreateNestedManyWithoutContainersInput } from '../category/category-create-nested-many-without-containers.input';
import { ItemCreateNestedManyWithoutContainerInput } from '../item/item-create-nested-many-without-container.input';
export declare class ContainerCreateWithoutStorageInput {
    name: string;
    description: string;
    qrCode: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categories?: CategoryCreateNestedManyWithoutContainersInput;
    items?: ItemCreateNestedManyWithoutContainerInput;
}
