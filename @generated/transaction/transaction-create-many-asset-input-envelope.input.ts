import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyAssetInput } from './transaction-create-many-asset.input';
import { Type } from 'class-transformer';

@InputType()
export class TransactionCreateManyAssetInputEnvelope {

    @Field(() => [TransactionCreateManyAssetInput], {nullable:false})
    @Type(() => TransactionCreateManyAssetInput)
    data!: Array<TransactionCreateManyAssetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
