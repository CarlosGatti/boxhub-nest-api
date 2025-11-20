import { ProjectCreateNestedOneWithoutMaterialsInput } from '../project/project-create-nested-one-without-materials.input';
export declare class MaterialEntryCreateWithoutReceivedByInput {
    name: string;
    supplier: string;
    quantity: number;
    receivedAt: Date | string;
    note?: string;
    imageUrls?: any;
    createdAt?: Date | string;
    project: ProjectCreateNestedOneWithoutMaterialsInput;
}
