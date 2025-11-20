import { DiscartItemType } from '../prisma/discart-item-type.enum';
import { DiscartItemCondition } from '../prisma/discart-item-condition.enum';
import { DiscartItemStatus } from '../prisma/discart-item-status.enum';
import { User } from '../user/user.model';
export declare class DiscartItem {
    id: number;
    title: string;
    description: string;
    type: keyof typeof DiscartItemType;
    price: number | null;
    category: string;
    condition: keyof typeof DiscartItemCondition;
    status: keyof typeof DiscartItemStatus;
    imageUrls: Array<string>;
    pickupAddress: any | null;
    contactPhone: string;
    createdById: number;
    createdAt: Date;
    updatedAt: Date;
    createdBy?: User;
}
