import { UserCreateNestedOneWithoutReceivedMaterialsInput } from '../user/user-create-nested-one-without-received-materials.input';
export declare class MaterialEntryCreateWithoutProjectInput {
    name: string;
    supplier: string;
    quantity: number;
    receivedAt: Date | string;
    note?: string;
    imageUrls?: any;
    createdAt?: Date | string;
    receivedBy?: UserCreateNestedOneWithoutReceivedMaterialsInput;
}
