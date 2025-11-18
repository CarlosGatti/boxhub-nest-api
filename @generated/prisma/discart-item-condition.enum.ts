import { registerEnumType } from '@nestjs/graphql';

export enum DiscartItemCondition {
    NEW = "NEW",
    LIKE_NEW = "LIKE_NEW",
    USED = "USED"
}


registerEnumType(DiscartItemCondition, { name: 'DiscartItemCondition', description: undefined })
