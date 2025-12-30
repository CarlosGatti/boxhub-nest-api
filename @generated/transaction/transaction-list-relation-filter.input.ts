import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereInput } from './transaction-where.input';
import { Type } from 'class-transformer';

@InputType()
export class TransactionListRelationFilter {

    @Field(() => TransactionWhereInput, {nullable:true})
    @Type(() => TransactionWhereInput)
    every?: TransactionWhereInput;

    @Field(() => TransactionWhereInput, {nullable:true})
    @Type(() => TransactionWhereInput)
    some?: TransactionWhereInput;

    @Field(() => TransactionWhereInput, {nullable:true})
    @Type(() => TransactionWhereInput)
    none?: TransactionWhereInput;
}
