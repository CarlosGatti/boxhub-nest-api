import { Container } from '../container/container.model';
export declare class Item {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    quantity: number;
    category: string;
    containerId: number;
    createdAt: Date;
    updatedAt: Date;
    container?: Container;
}
