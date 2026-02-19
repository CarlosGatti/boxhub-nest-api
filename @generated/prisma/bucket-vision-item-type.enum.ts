import { registerEnumType } from '@nestjs/graphql';

export enum BucketVisionItemType {
    IMAGE = "IMAGE",
    QUOTE = "QUOTE",
    COLOR = "COLOR",
    LINK = "LINK",
    GOAL_REF = "GOAL_REF"
}


registerEnumType(BucketVisionItemType, { name: 'BucketVisionItemType', description: undefined })
