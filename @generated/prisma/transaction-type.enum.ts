import { registerEnumType } from '@nestjs/graphql';

export enum TransactionType {
    BUY = "BUY",
    SELL = "SELL"
}


registerEnumType(TransactionType, { name: 'TransactionType', description: undefined })
