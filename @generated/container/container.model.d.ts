import { Storage } from '../storage/storage.model';
import { Category } from '../category/category.model';
import { Item } from '../item/item.model';
import { ContainerCount } from './container-count.output';
export declare class Container {
    id: number;
    name: string;
    description: string;
    qrCode: string;
    code: string;
    storageId: number;
    createdAt: Date;
    updatedAt: Date;
    storage?: Storage;
    categories?: Array<Category>;
    items?: Array<Item>;
    _count?: ContainerCount;
}
