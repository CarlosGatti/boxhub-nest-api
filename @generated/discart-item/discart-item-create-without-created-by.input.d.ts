import { DiscartItemType } from '../prisma/discart-item-type.enum';
import { DiscartItemCondition } from '../prisma/discart-item-condition.enum';
import { DiscartItemStatus } from '../prisma/discart-item-status.enum';
import { DiscartItemCreateimageUrlsInput } from './discart-item-createimage-urls.input';
export declare class DiscartItemCreateWithoutCreatedByInput {
    title: string;
    description: string;
    type: keyof typeof DiscartItemType;
    price?: number;
    category: string;
    condition: keyof typeof DiscartItemCondition;
    status?: keyof typeof DiscartItemStatus;
    imageUrls?: DiscartItemCreateimageUrlsInput;
    pickupAddress?: any;
    contactPhone: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
